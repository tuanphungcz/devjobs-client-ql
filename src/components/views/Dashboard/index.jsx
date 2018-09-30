import React from 'react';
import { prop, map } from 'ramda';
import Link from 'react-router-dom/Link';
import { gql } from 'apollo-boost';
import withRouter from 'react-router-dom/withRouter';
import { clearStorage, goToLocation } from '../../../utils';
import Query from '../../common/Query';
import { AUTH_TOKEN } from '../../../constant';

const ME_QUERY = gql`
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

class Dashboard extends React.Component {
  handleLogOut = () => {
    clearStorage(AUTH_TOKEN);
    goToLocation('/');
  };

  render() {
    return (
      <Query query={ME_QUERY}>
        {({ data: { me } }) => {
          return (
            <div>
              Dashboard
              {me &&
                me.company && (
                  <div>
                    My Company -----
                    {me.company.companyName}
                  </div>
                )}
              <div>
                {map(
                  x => (
                    <div key={x.id}>
                      {x.title}
                      <Link to={`/profile/job/${x.id}`}>Editovat</Link>
                    </div>
                  ),
                  prop('jobs', me)
                )}
                <button onClick={this.handleLogOut}>Log out</button>
                <div>
                  <Link to="/dashboard/create-company">Create company</Link>
                </div>
                <div>
                  <Link to="/dashboard/create-job">Create job</Link>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default withRouter(Dashboard);
