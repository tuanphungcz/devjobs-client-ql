import React, { Component } from 'react';
import styled from 'styled-components';
import workspace from '../../../../assets/workspace.svg';
import Section from '../../../common/Section';
import { breakpoints } from '../../../../utils';
import { FONT_SIZE_HUGE, FONT_SIZE_LARGE } from '../../../../constant';

export default class HeroHeader extends Component {
  render() {
    const { imageSrc, ...other } = this.props;


    return (
      <Wrapper>
        <Section {...other}>
          <SelectWrapper>
            <TextWrapper>
              <TextTitle>DevJobs</TextTitle>
              <SubTitle>Výběr nejvíce cool jobu pro developery</SubTitle>
            </TextWrapper>
            <WorkspaceImage src={workspace || imageSrc} />
          </SelectWrapper>
        </Section>
      </Wrapper>
    );
  }
}

export const Wrapper = styled.div`
  padding: 64px 0;
  background: white;
  border-bottom: 1px solid lightgray;
`;

const WorkspaceImage = styled.img`
  max-height: 100px;
  margin-left: 16px;
`;

const TextTitle = styled.h1`
  color: #007eff;
  margin: 8px 0;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  margin: 8px 0;
  font-size: ${FONT_SIZE_LARGE};

  ${breakpoints.mobile} {
    font-size: ${FONT_SIZE_HUGE};
  }
`;

const TextWrapper = styled.div`
  flex-grow: 2;
`;
const SelectWrapper = styled.div`
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
