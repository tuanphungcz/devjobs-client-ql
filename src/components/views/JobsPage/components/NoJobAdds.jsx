import React from 'react';
import styled from 'styled-components';
import Button from '../../../common/Button';
import Card from '../../../common/Card';

export default () => (
  <Card>
    <Content>
      <div>Momentálně nejsou v této kategorií, zádné inzeráty.</div>
      <div>Pridej prvni inzerat</div>
      <Button>Pridat inzerat</Button>
    </Content>
  </Card>
);

const Content = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 32px 0;
  text-align: center;
`;
