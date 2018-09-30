import React from 'react';
import styled from 'styled-components';
import { map } from 'ramda';

const jobFilters = [
  { value: 'front end', image: '🖥' },
  { value: 'back end', image: '🛠' },
  { value: 'Remote', image: '🏝' },
  { value: 'Junior', image: '👶' },
  { value: 'Mobile', image: '📱' },
  { value: 'Blockchain', image: '🔗' },
];

export default () => (
  <IconWrapper>
    {map(
      ({ value, image }) => (
        <FilterWrapper key={value}>
          <div>{image}</div>
          <div>{value}</div>
        </FilterWrapper>
      ),
      jobFilters,
    )}
  </IconWrapper>
);

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px;
  margin-bottom: 0;
  padding-bottom: 16px;
  cursor: pointer;
  border-bottom: 3px solid white;

  &:hover {
    border-bottom: 3px solid black;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
