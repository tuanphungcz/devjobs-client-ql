import React from 'react';
import AnchorLink from '../common/AnchorLink';

const PageNotFound = ({ location }) => (
  <div>
    <p>Sorry, no page found at {location.pathname}</p>
    <AnchorLink to="/">Go Home</AnchorLink>
  </div>
);

export default PageNotFound;
