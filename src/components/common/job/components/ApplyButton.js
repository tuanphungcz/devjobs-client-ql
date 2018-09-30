import React from 'react';
import Button from '../../Button';
import NewTabLink from '../../NewTabLink';

const ApplyButton = ({ longText = false, profileJob, jobId, ...other }) => (
  <NewTabLink {...other}>
    <Button>{longText ? 'Mám zájem o tuto pozici!' : 'Mám zájem'}</Button>
  </NewTabLink>
);

export default ApplyButton;
