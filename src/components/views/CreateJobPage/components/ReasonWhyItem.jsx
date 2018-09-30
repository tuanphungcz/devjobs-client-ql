import React from 'react';
import Emoji from '../../../common/Emoji';
import styled from '../../../../../node_modules/styled-components';

export default ({ primary, secondary, helper, emojiValue }) => (
  <ReasonWhyWrapper>
    <PrimaryWrapper>{primary} </PrimaryWrapper>
    <SecondaryWrapper>
      <Emoji value={emojiValue} /> {secondary}
    </SecondaryWrapper>
    <HelperWrapper>{helper}</HelperWrapper>
  </ReasonWhyWrapper>
);

const ReasonWhyWrapper = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PrimaryWrapper = styled.div``;
const SecondaryWrapper = styled.div`
  font-size: 20px;
  font-weight: bold;
  padding: 4px 0;
`;
const HelperWrapper = styled.div`
  font-size: 12px;
`;
