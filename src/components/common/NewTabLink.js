import React from 'react';
import styled from 'styled-components';

const NewTabLink = ({ openNewTab = true, ...other }) => {
  const newTabProps = openNewTab && {
    rel: 'noopener noreferrer',
    target: '_blank',
  };

  const anchorElementProps = {
    ...other,
    ...newTabProps,
  };

  return <AnchorElement {...anchorElementProps} />;
};

const AnchorElement = styled.div`
  &:visited,
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
  }
`;

export default NewTabLink;
