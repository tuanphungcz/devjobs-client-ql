import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border-radius: 4px;
  padding: 12px 20px;
  vertical-align: middle;
  color: #fff;
  border: none;
  outline: none;
  text-decoration: none;
  background: #272e3a;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  white-space: nowrap;
  transform: translate3d(0, 0, 0);
  -webkit-box-shadow: 0 0 0 transparent;
  box-shadow: 0 0 0 transparent;
  -webkit-appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-transition: 0.2s;
  transition: 0.2s;
  will-change: transform, box-shadow;
  -webkit-box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0 -100px 0 transparent inset;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.1), 0 -100px 0 transparent inset;

  ${props => props.width && `
    width: ${props.width}px;
  `}

  ${props => props.small && `
    border-radius: 3px;
    font-size: 16px;
    padding: 9px 14px;
  `}

  ${props => props.green && `
    background: #21b382;
    color: white !important;
  `}

  ${props => props.blue && `
  background: #186bff;
  color: white !important;
`}

  

  ${props => props.wide && `
    width: 100% !important;
  `}

  &:hover {
    background: #21b382;
    color: white !important;
    box-shadow: 0 4px 4px rgba(0,0,0,0.1), 0 -100px 0 rgba(0,0,0,0.15) inset;

  }
`;

export default Button;