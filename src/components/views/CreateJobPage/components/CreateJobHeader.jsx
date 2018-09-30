import React, { Component } from 'react';
import styled from 'styled-components';
import { map } from 'ramda';
import Section from '../../../common/Section';
import Emoji from '../../../common/Emoji';
import Card from '../../../common/Card';
import reasonArray from './reasonArray';
import ReasonWhyItem from './ReasonWhyItem';

export default class CreateJobHeader extends Component {
  render() {
    const { handleOnFinalChange, finalValue, ...other } = this.props;

    const cardTitle = (
      <CardTitle>
        <Emoji value="👨‍💻" />Inzerujte na devjobs
      </CardTitle>
    );

    return (
      <HeaderSection {...other}>
        <Title>Najdi developera během pár kliků!</Title>
        {cardTitle}
        <HeaderCard>
          <TextWrapper>
            <Row>
              {map(
                reason => <ReasonWhyItem key={reason.primary} {...reason} />,
                reasonArray,
              )}
            </Row>
          </TextWrapper>
        </HeaderCard>
      </HeaderSection>
    );
  }
}

const CardTitle = styled.div`
  font-weight: bold;
  padding-bottom: 8px;
`;

const HeaderCard = styled(Card)`
  position: relative;
  max-width: 500px;
  margin: 0 auto;
`;

const Title = styled.div`
  font-size: 32px;
  color: #007eff;
  margin-bottom: 32px;
  font-weight: bold;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  & > div {
    border: 1px solid lightgray;
    margin: 0 -1px -1px 0;
  }
`;

const TextWrapper = styled.div``;

export const Wrapper = styled.div`
  border-bottom: 1px solid lightgray;
  padding: 64px 0;
  background: white;
`;

export const HeaderSection = styled(Section)`
  max-width: 800px;
  margin-top: 64px;
  text-align: center;
`;
