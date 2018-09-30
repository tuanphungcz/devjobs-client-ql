import React, { Component } from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { prop } from 'ramda';
import { withRouter, Link } from 'react-router-dom';
import Query from '../../common/Query';

const ME_QUERY = gql`
  query MeQuery {
    me {
      id
    }
  }
`;
class NavbarActions extends Component {
  render() {
    return (
      <Query query={ME_QUERY}>
        {({ data: { me } }) => (
          <NavbarActionsWrapper>
            {prop('id', me) ? (
              <Link to="/dashboard">Dashboard</Link>
            ) : (
              <Link to="/login">Login</Link>
            )}
            <Link to="/companies">Companies</Link>
          </NavbarActionsWrapper>
        )}
      </Query>
    );
  }
}

export default withRouter(NavbarActions);

const NavbarActionsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > *:last-child {
    margin-left: 16px;
  }
`;
