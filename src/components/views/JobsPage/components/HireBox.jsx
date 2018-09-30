import React, { Component } from 'react';
import styled from 'styled-components';
import { Text } from '../../../common/typography';
import Button from '../../../common/Button';
import Emoji from '../../../common/Emoji';
import { breakpoints } from '../../../../utils';
import Section from '../../../common/Section';

export default class HireBox extends Component {
  render() {
    return (
      <Wrapper {...this.props}>
        <HeroSection>
          <Text>
            <Emoji value="👉" /> Hledáte posilu do svýho dev team?{' '}
            <DesktopText>
              Inzeruj zdarma dokud jsme v betě <Emoji value="😃" />.
            </DesktopText>
          </Text>
          <Button>Hledám vývojáře</Button>
        </HeroSection>
      </Wrapper>
    );
  }
}

export const Wrapper = styled.div`
  border-bottom: 1px solid lightgray;
  height: 64px;
  padding: 8px;
  background: lightblue;

  ${breakpoints.desktop} {
    display: flex;
  }
`;

const HeroSection = styled(Section)`
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

const DesktopText = styled.span`
  display: none;
  ${breakpoints.desktop} {
    display: inline;
  }
`;
