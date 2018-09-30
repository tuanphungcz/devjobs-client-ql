import React from 'react';

export default ({ html, ...other }) => (
  <div
    {...other}
    dangerouslySetInnerHTML={{
      __html: html,
    }}
  />
);
