import React from 'react';

export default ({ value, ...other }) => (
  <span role="img" aria-label="emoji" {...other}>
    {value}
  </span>
);
