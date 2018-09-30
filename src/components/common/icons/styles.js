import styled from 'styled-components';

export const IconItem = styled.div`
  background-color: #333;
  border-radius: 50%;
  margin: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover path {
    fill: #fff;
  }

  path {
    transition: fill 200ms;
  }
`;
