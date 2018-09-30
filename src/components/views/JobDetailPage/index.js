import React from 'react';
import withRouter from 'react-router-dom/withRouter';
import { JOB_QUERY_BY_ID } from '../../../queries';
import Query from '../../common/Query';
import JobDetail from './components/JobDetail';

class Job extends React.Component {
  render() {
    return (
      <Query
        query={JOB_QUERY_BY_ID}
        variables={{ id: this.props.match.params.id }}
      >
        {({ data: { job } }) => {
          return (
            <JobDetail job={job} />
          );
        }}
      </Query>
    );
  }
}

export default withRouter(Job);
