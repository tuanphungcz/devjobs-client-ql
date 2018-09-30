import React, { Component } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { AUTH_TOKEN } from '../../../constant';
import { LOGIN_USER_MUTATION } from '../../../queries';
import { TextSmall, Text } from '../../common/typography';
import Emoji from '../../common/Emoji';
import LoginForm from './LoginForm';
import Mutation from '../../common/Mutation';
import { setStorage, goToLocation } from '../../../utils';

const logInValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string().required('Required'),
});

const initialValues = {
  email: '',
  password: '',
};

class LoginPage extends Component {
  handleLogin = async ({ values: { email, password }, loginMutation }) => {
    loginMutation({
      variables: { email, password },
    }).then(result => {
      setStorage(AUTH_TOKEN, result.data.login.token);
      goToLocation('/dashboard');
    });
  };

  handleShowSignUp = () => this.props.history.push('/signUp');

  render() {
    return (
      <ContentWrapper>
        <TextWrapper>
          <div>Přihlásit se</div>
          <Text>Hey there! Welcome back.</Text>
        </TextWrapper>
        <Mutation mutation={LOGIN_USER_MUTATION}>
          {loginMutation => (
            <Formik
              initialValues={initialValues}
              validationSchema={logInValidationSchema}
              onSubmit={async values => this.handleLogin({ values, loginMutation })}
              render={LoginForm}
            />
          )}
        </Mutation>
        <TextSmall>
          Nemáte ješte účet? <Emoji value="👉" />{' '}
          <SignUp onClick={this.handleShowSignUp}>Registrovat se</SignUp>
        </TextSmall>
      </ContentWrapper>
    );
  }
}

export default withRouter(LoginPage);

const SignUp = styled.span`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid blue;
  }
`;

const TextWrapper = styled.div`
  margin-bottom: 32px;
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 400px;
`;
