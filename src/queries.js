import { gql } from 'apollo-boost';

export const JOB_QUERY = gql`
  query JobQuery {
    job {
      id
      title
      description
    }
  }
`;

export const JOB_QUERY_BY_ID = gql`
  query JobQuery($id: ID) {
    job(id: $id) {
      id
      title
      description
      workingTime
      location
      isTopped
      tags
      isPublished
      company {
        companyName
        companyLogoUrl
        contactLinkOrEmail
      }
    }
  }
`;

export const JOBS_QUERY = gql`
  query JobsQuery {
    jobs {
      createdAt
      id
      description
      title
      workingTime
      location
      isTopped
      tags
      isPublished
      company {
        companyName
        companyLogoUrl
        contactLinkOrEmail
      }
    }
  }
`;

export const COMPANIES_QUERY = gql`
  query CompaniesQuery {
    companies {
      id
      name
    }
  }
`;

export const JOBS_FILTER_QUERY = gql`
  query JobsSearchQuery($filter: [String]) {
    jobs(filter: $filter) {
      id
      createdAt
      description
      title
      workingTime
      location
      tags
      isTopped
      isPublished
      company {
        companyName
        companyLogoUrl
        contactLinkOrEmail
      }
    }
  }
`;

export const DELETE_MUTATION = gql`
  mutation DeleteMutatoin($id: ID!) {
    deleteJob(id: $id) {
      id
    }
  }
`;

export const LOGIN_USER_MUTATION = gql`
  mutation LoginMutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;

export const ME_QUERY = gql`
  query MeQuery {
    me {
      id
      email
      name
      company {
        companyName
      }
      jobs {
        id
        description
        title
        workingTime
        location
        tags
        isPublished
        company {
          companyName
          companyLogoUrl
          contactLinkOrEmail
        }
      }
    }
  }
`;

export const SIGNUP_USER_MUTATION = gql`
  mutation SignupMutation($email: String!, $password: String!, $name: String!) {
    signup(email: $email, password: $password, name: $name) {
      token
      user {
        id
        name
        email
      }
    }
  }
`;
