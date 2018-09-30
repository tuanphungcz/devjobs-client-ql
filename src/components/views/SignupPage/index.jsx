import React, { Component } from 'react';
import { Formik } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import { withRouter } from 'react-router-dom';
import { Mutation } from 'react-apollo';
import { AUTH_TOKEN } from '../../../constant';
import { SIGNUP_USER_MUTATION } from '../../../queries';
import { TextSmall, Text, TextLarge } from '../../common/typography';
import Emoji from '../../common/Emoji';
import SignUpForm from './SignUpForm';
import { setStorage, goToLocation } from '../../../utils';

const initialValues = {
  email: '',
  password: '',
  name: '',
};

const signUpValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  password: Yup.string().required('Required'),
  name: Yup.string().required('Required'),
});

class SignupPage extends Component {
  handleSignUp = async ({ values: { email, name, password }, signupMutation }) =>
    signupMutation({
      variables: {
        name,
        email,
        password,
      },
    }).then(result => {
      const { token } = result.data.signup;
      setStorage(AUTH_TOKEN, token);
      goToLocation('/dashboard/create-company');
    });

  handleShowLogin = () => this.props.history.push('/login');

  render() {
    return (
      <ContentWrapper>
        <TextWrapper>
          <TextLarge>Registrovat se</TextLarge>
          <EmojiIcon value="🙋‍♂️" />
          <Text>Heloooo, and welcome to devjobs</Text>
        </TextWrapper>
        <Mutation mutation={SIGNUP_USER_MUTATION}>
          {signupMutation => (
            <Formik
              initialValues={initialValues}
              validationSchema={signUpValidationSchema}
              onSubmit={async values => this.handleSignUp({ values, signupMutation })}
              render={SignUpForm}
            />
          )}
        </Mutation>
        <TextSmall>
          Máte už účet? <Emoji value="👉" />{' '}
          <SignIn onClick={this.handleShowLogin}>Přihlásit se</SignIn>
        </TextSmall>
      </ContentWrapper>
    );
  }
}

export default withRouter(SignupPage);

const SignIn = styled.span`
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid blue;
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
  max-width: 400px;
`;

const TextWrapper = styled.div`
  margin-bottom: 32px;
`;

const EmojiIcon = styled(Emoji)`
  font-size: 64px;
`;
