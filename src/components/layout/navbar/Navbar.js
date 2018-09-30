import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakpoints } from '../../../utils';
import Section from '../../common/Section';
import Emoji from '../../common/Emoji';
import NavbarActions from './NavbarActions';

class Navbar extends Component {
  render() {
    const { token } = this.props;

    const navbarActionsProps = {
      token,
    };

    return (
      <Header>
        <SectionElement>
          <Content>
            <Link to="/">
              <TextLogo>
                <Emoji value="👨‍💻" />
                <BetaLogo>| beta</BetaLogo>
              </TextLogo>
            </Link>
            <NavbarActions {...navbarActionsProps} />
          </Content>
        </SectionElement>
      </Header>
    );
  }
}

export default Navbar;

const Header = styled.div`
  background: white;
  border-bottom: 1px solid lightgray;
`;

const SectionElement = styled(Section)``;

const TextLogo = styled.span`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: bold;
  color: #007eff;
  letter-spacing: 1px;
  align-items: center;
  display: flex;
  justify-content: center;
  margin-bottom: 8px;

  ${breakpoints.mobile} {
    justify-content: space-between;
    margin-bottom: 0;
  }
`;

const BetaLogo = styled.span`
  font-size: 12px;
  margin-left: 8px;
  color: gray;
  display: none;

  ${breakpoints.tablet} {
    display: flex;
  }
`;

const Content = styled.div`
  padding: 8px 0;

  ${breakpoints.mobile} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
