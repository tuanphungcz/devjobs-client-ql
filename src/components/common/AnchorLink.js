import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AnchorLink = styled(Link)`
  text-decoration: none;
  &:visited,
  &:hover,
  &:active,
  &:focus {
    text-decoration: none;
    color: ${props => props.color || 'black'};
  }
`;

export default AnchorLink;
