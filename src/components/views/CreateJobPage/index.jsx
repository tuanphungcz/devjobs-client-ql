import React, { Component } from 'react';
import { compose } from 'ramda';
import * as Yup from 'yup';
import { gql } from 'apollo-boost';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { Formik } from 'formik';
import CreateJobForm from './components/CreateJobForm';

export const createJobValidationSchema = Yup.object().shape({
  title: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  location: Yup.string().required('Required'),
  tags: Yup.string().required('Required'),
  workingTime: Yup.string().required('Required'),
});

export const CREATE_JOB_MUTATION = gql`
  mutation CreateJobMutation(
    $title: String!
    $companyId: String!
    $description: String!
    $location: String!
    $tags: String!
    $workingTime: String!
  ) {
    createJob(
      title: $title
      companyId: $companyId
      description: $description
      location: $location
      tags: $tags
      workingTime: $workingTime
    ) {
      title
      description
      location
      tags
      workingTime
    }
  }
`;

export const UPDATE_JOB_MUTATION = gql`
  mutation UpdateJobMutation(
    $title: String!
    $description: String!
    $location: String!
    $tags: String!
    $workingTime: String!
    $id: ID
  ) {
    updateJob(
      title: $title
      description: $description
      location: $location
      tags: $tags
      workingTime: $workingTime
      id: $id
    ) {
      id
      title
      description
      location
      tags
      workingTime
    }
  }
`;

export const JOB_QUERY_DETAIL = gql`
  query JobQueryDetail($id: ID!) {
    job(id: $id) {
      description
      location
      tags
      title
      workingTime
      id
    }
  }
`;

const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      company {
        id
      }
    }
  }
`;

const initialValues = {
  title: '',
  description: '',
  location: '',
  tags: '',
  workingTime: '',
};

class CreateJob extends Component {
  handleSubmit = values => {
    const { updateJob, createJob, history, me } = this.props;
    if (values.id) {
      return updateJob({
        variables: {
          ...values,
          id: values.id,
        },
      }).then(() => history.replace('/dashboard'));
    }
    return createJob({
      variables: {
        ...values,
        companyId: me.company.id,
      },
    }).then(() => (window.location.href = '/dashboard'));
  };

  render() {
    const { loadingMe, jobQueryLoadingMe, job } = this.props;

    if (loadingMe || jobQueryLoadingMe) {
      return null;
    }

    return (
      <Formik
        initialValues={job || initialValues}
        validationSchema={createJobValidationSchema}
        onSubmit={this.handleSubmit}
        render={CreateJobForm}
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

const updateJobMutation = graphql(UPDATE_JOB_MUTATION, {
  props: ({ mutate }) => ({
    updateJob: mutate,
  }),
});

const createJobMutation = graphql(CREATE_JOB_MUTATION, {
  props: ({ mutate }) => ({
    createJob: mutate,
  }),
});

const jobDetalQuery = graphql(JOB_QUERY_DETAIL, {
  props: ({ data: { loading, job } }) => ({
    jobQueryLoadingMe: loading,
    job,
  }),
  options: ({ match }) => ({
    variables: { id: match.params.jobId || 1 },
  }),
});

export default compose(
  meQuery,
  jobDetalQuery,
  updateJobMutation,
  createJobMutation,
  withRouter
)(CreateJob);
