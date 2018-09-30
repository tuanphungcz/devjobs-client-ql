import React from 'react';
import { Link } from 'react-router-dom';
import { map } from 'ramda';
import { gql } from 'apollo-boost';
import withRouter from 'react-router-dom/withRouter';
import Query from '../../common/Query';

const COMPANIES_QUERY = gql`
  query CompaniesQuery {
    companies {
      id
      companyName
    }
  }
`;

const renderCompanies = map(company => (
  <Link to={`company/${company.id}`} key={company.id}>
    <div>{company.companyName}</div>
  </Link>
));

class Companies extends React.Component {
  render() {
    return (
      <Query query={COMPANIES_QUERY}>
        {({ data: { companies } }) => <div>{renderCompanies(companies)}</div>}
      </Query>
    );
  }
}

export default withRouter(Companies);
