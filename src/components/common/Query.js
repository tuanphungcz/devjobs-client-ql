import React from 'react';
import { Query } from 'react-apollo';
import Loader from '../common/Loader';

export default ({ children, loader, ...props }) => (
  <Query {...props}>
    {({ loading, error, data, fetchMore, client }) => {

      if (loading) {
        return loader || <Loader />;
      }

      return children({
        data,
        fetchMore,
        client,
        error,
      });
    }}
  </Query>
);
