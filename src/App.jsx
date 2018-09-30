import React, { Component } from 'react';
import styled from 'styled-components';
import { graphql } from 'react-apollo';
// import LogRocket from 'logrocket';
import Navbar from './components/layout/navbar/Navbar';
import Routes from './Routes';
import ErrorHandler from './components/common/ErrorHandler';
import { clearAuthToken, setAuthToken, getAuthToken, isTokenExpired } from './utils';
import { ME_QUERY } from './queries';

// LogRocket.init('2gt9ia/devjobs');

// LogRocket.identify('TEST_ID', {
//   name: 'tuan',
//   email: 'tuan@example.com',

//   // Add your own custom user variables here, ie:
//   subscriptionType: 'pro',
// });

// const TOKEN_QUERY = gql`
//   query tokenQuery {
//     token @client
//   }
// `;

class RootContainer extends Component {
  state = {
    error: null,
  };

  componentDidMount() {
    const token = getAuthToken();

    if (token !== null && token !== undefined) {
      const expired = isTokenExpired(token);

      if (!expired) {
        setAuthToken(token);
      } else {
        clearAuthToken();
      }
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    if (this.state.error) {
      return <ErrorHandler />;
    }
    return (
      <Layout>
        <Navbar />
        <Routes tokenValue={this.props.tokenValue} />
      </Layout>
    );
  }
}

const Layout = styled.div``;

export default graphql(ME_QUERY, {
  options: {
    errorPolicy: 'all',
  },
})(RootContainer);
