import React, { Component } from 'react';
import { compose } from 'ramda';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CreateCompanyForm from './components/CreateCompanyForm';
import { goToLocation } from '../../../utils';

export const createJobValidationSchema = Yup.object().shape({
  companyName: Yup.string().required('Required'),
  companyDescription: Yup.string().required('Required'),
  companyLogoUrl: Yup.string().required('Required'),
  companyCoverImageUrl: Yup.string().required('Required'),
  contactLinkOrEmail: Yup.string().required('Required'),
  companyWebsite: Yup.string().required('Required'),
});

export const CREATE_COMPANY_MUTATION = gql`
  mutation CreateCompanyMutation(
    $companyName: String
    $companyDescription: String
    $companyLogoUrl: String
    $companyCoverImageUrl: String
    $contactLinkOrEmail: String
    $companyWebsite: String
  ) {
    createCompany(
      companyName: $companyName
      companyDescription: $companyDescription
      companyLogoUrl: $companyLogoUrl
      companyCoverImageUrl: $companyCoverImageUrl
      contactLinkOrEmail: $contactLinkOrEmail
      companyWebsite: $companyWebsite
    ) {
      companyName
      companyDescription
      companyLogoUrl
      companyCoverImageUrl
      contactLinkOrEmail
      companyWebsite
    }
  }
`;

export const UPDATE_COMPANY_MUTATION = gql`
  mutation UpdateCompanyMutation(
    $companyName: String
    $companyDescription: String
    $companyLogoUrl: String
    $companyCoverImageUrl: String
    $contactLinkOrEmail: String
    $companyWebsite: String
    $id: ID!
  ) {
    updateCompany(
      companyName: $companyName
      companyDescription: $companyDescription
      companyLogoUrl: $companyLogoUrl
      companyCoverImageUrl: $companyCoverImageUrl
      contactLinkOrEmail: $contactLinkOrEmail
      companyWebsite: $companyWebsite

      id: $id
    ) {
      id
      companyName
      companyDescription
      companyLogoUrl
      companyCoverImageUrl
      contactLinkOrEmail
      companyWebsite
    }
  }
`;

const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      company {
        companyName
        companyDescription
        companyLogoUrl
        companyCoverImageUrl
        contactLinkOrEmail
        companyWebsite
        id
      }
    }
  }
`;

const initialValues = {
  companyName: '',
  companyDescription: '',
  companyLogoUrl: '',
  companyCoverImageUrl: '',
  contactLinkOrEmail: '',
  companyWebsite: '',
};

class CreateCompany extends Component {
  handleSubmit = values => {
    const { createCompany, updateCompany } = this.props;

    if (values.id) {
      return updateCompany({
        variables: values,
      }).then(() => goToLocation('/dashboard'));
    }

    return createCompany({
      variables: values,
    }).then(() => goToLocation('/dashboard'));
  };

  render() {
    const { me, loadingMe } = this.props;

    if (loadingMe) {
      return null;
    }
    return (
      <Formik
        initialValues={me.company || initialValues}
        validationSchema={createJobValidationSchema}
        onSubmit={this.handleSubmit}
        render={CreateCompanyForm}
      />
    );
  }
}

const meQuery = graphql(ME_QUERY, {
  props: ({ data: { loading, me } }) => ({
    loadingMe: loading,
    me,
  }),
});

const createCompanyMutation = graphql(CREATE_COMPANY_MUTATION, {
  props: ({ mutate }) => ({
    createCompany: mutate,
  }),
});

const updateCompanyMutation = graphql(UPDATE_COMPANY_MUTATION, {
  props: ({ mutate }) => ({
    updateCompany: mutate,
  }),
  options: {

  }
});

export default compose(
  meQuery,
  createCompanyMutation,
  updateCompanyMutation,
  withRouter
)(CreateCompany);
