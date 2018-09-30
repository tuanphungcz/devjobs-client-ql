import React from 'react';
import withRouter from 'react-router-dom/withRouter';

class EmailForm extends React.Component {
  render() {
    const { job } = this.props;
    return (
      <div>
        <div>{job.title}</div>
      </div>
    );
  }
}

export default withRouter(EmailForm);
