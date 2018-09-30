import React from 'react';
import { Mutation } from 'react-apollo';

export default ({ children, ...props }) => (
  <Mutation {...props}>{other => children(other)}</Mutation>
);
