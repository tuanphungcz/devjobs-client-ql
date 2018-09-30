import React from 'react';
import { Link } from 'react-router-dom';
import { map } from 'ramda';
import { gql } from 'apollo-boost';
import withRouter from 'react-router-dom/withRouter';
import Query from '../../../common/Query';

const COMPANY_JOBS_BY_ID = gql`
  query CompanyJobsQuery($id: ID) {
    company(id: $id) {
      id
      jobs {
        id
        title
        location
        workingTime
        createdAt
      }
    }
  }
`;

class CompanyJobs extends React.Component {
  render() {
    const { companyId } = this.props;

    return (
      <Query
        query={COMPANY_JOBS_BY_ID}
        variables={{ id: companyId }}
      >
        {({ data: { company: { jobs } } }) => (
          <div>
            {map(job => <Link to={`/job/${job.id}`} replace><div key={job.id}>{job.title}</div></Link>, jobs)}
          </div>
        )}
      </Query>
    );
  }
}

export default withRouter(CompanyJobs);
