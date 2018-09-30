import React from 'react';
import { gql } from 'apollo-boost';
import withRouter from 'react-router-dom/withRouter';
import Query from '../../common/Query';
import CompanyJobs from './components/CompanyJobs';

const COMPANY_QUERY_BY_ID = gql`
  query CompanyQuery($id: ID) {
    company(id: $id) {
      id
      companyName
    }
  }
`;

class Companies extends React.Component {
  render() {
    const { match } = this.props;

    return (
      <Query
        query={COMPANY_QUERY_BY_ID}
        variables={{ id: match.params.companyId }}
      >
        {({ data: { company } }) => (
          <div>
            <div>{company.companyName}</div>
            <CompanyJobs companyId={match.params.companyId} />
          </div>
        )}
      </Query>
    );
  }
}

export default withRouter(Companies);
