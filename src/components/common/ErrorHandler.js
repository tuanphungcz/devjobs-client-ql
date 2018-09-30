import styled from 'styled-components';
import React from 'react';
import Button from './Button';
import Emoji from './Emoji';

export default () => (
  <ErrorWrapper>
    <ContentWrapper>
      <div>
        <Emoji value="😣" /> oooops, there was an error
      </div>
      <div>please refresh the page</div>
      <RefreshButton>Refresh</RefreshButton>
    </ContentWrapper>
  </ErrorWrapper>
);

const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const RefreshButton = styled(Button)`
  margin-top: 32px;
`;
