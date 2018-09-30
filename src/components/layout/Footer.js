import React from 'react';
import styled from 'styled-components';
import { Text } from '../common/typography';
import TwitterIcon from '../common/icons/TwitterIcon';
import FacebookIcon from '../common/icons/FacebookIcon';
import EmailIcon from '../common/icons/EmailIcon';
import Section from '../common/Section';

const Footer = () => (
  <Wrapper>
    <Section>
      <Content>
        <TextLogo>DevJobs | BETA</TextLogo>
        <IconsWrapper>
          <TwitterIcon />
          <FacebookIcon />
          <EmailIcon />
        </IconsWrapper>
      </Content>
    </Section>
  </Wrapper>
);

export default Footer;

const Wrapper = styled.div`
  margin-top: 100px;
  background: #f2f2f2;
`;

const IconsWrapper = styled.div`
  justify-content: center;
  display: flex;
  & > * {
    margin-right: 16px;
  }
`;
const Content = styled.div`
  justify-content: space-between;
  align-items: center;
  display: flex;
  align-items: center;
  height: 96px;
`;
const TextLogo = styled(Text)`
  font-size: 20px;
`;
