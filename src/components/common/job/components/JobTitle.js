import React from 'react';
import styled from 'styled-components';
import { JobTitleWrapper } from '../styles';

const JobTitle = ({ job }) => (
  <JobTitleWrapper>
    <PrimaryText>
      <span>{`${job.company.companyName} • ${job.location}`}</span>
    </PrimaryText>
  </JobTitleWrapper>
);

export default JobTitle;

const PrimaryText = styled.div`
  display: flex;
`;

