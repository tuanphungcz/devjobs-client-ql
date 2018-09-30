import React, { Component } from 'react';
import { split, compose, join } from 'ramda';
import styled from 'styled-components';
import withRouter from 'react-router/withRouter';
import JobTitle from './components/JobTitle';
import { CompanyImage } from './styles';
import { breakpoints, toLowerCaseAndFistUpper, getDifferenceDaysInCs } from '../../../utils';
import { FONT_SIZE_SMALL } from '../../../constant';

class Job extends Component {
  onJobClick = () => this.props.history.push(`/job/${this.props.job.id}`);

  render() {
    const { job } = this.props;

    const workingTime = compose(
      join(' / '),
      split(','),
      toLowerCaseAndFistUpper
    )(job.workingTime);

    return (
      <JobCard onClick={this.onJobClick} isTopped={job.isTopped}>
        <ComapanyImageWrapper>
          <CompanyImage src={job && job.company.companyLogoUrl} />
        </ComapanyImageWrapper>
        <JobCardDetail>
          <FirstLine>
            <JobTitle job={job} />
            <div>{workingTime}</div>
          </FirstLine>
          <SecondLine>
            <div>{job.title}</div>
            <CreatedAt>{getDifferenceDaysInCs(job.createdAt)}</CreatedAt>
          </SecondLine>
        </JobCardDetail>
      </JobCard>
    );
  }
}

export default withRouter(Job);

const CreatedAt = styled.div`
  font-size: ${FONT_SIZE_SMALL};
  color: rgba(41, 47, 56, 0.8);
`;

const ComapanyImageWrapper = styled.div`
  background: white;
  min-width: 60px;
  border-radius: 6px;
  min-height: 60px;
`;

const JobCard = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  min-height: 90px;
  justify-content: space-between;
  padding: 0 24px;
  border-radius: 6px;

  ${props => props.isTopped && 'background: rgba(166,232,195,0.2)'};

  ${breakpoints.tablet} {
    &:hover {
      ${props => !props.isTopped && 'background: #f5f5f5'};
    }

    &:hover {
      color: #186bff;
    }
  }
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  color: rgba(41, 47, 56, 0.8);
  font-size: 14px;
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-weight: 400;
`;

const JobCardDetail = styled.div`
  width: 100%;
  margin-left: 16px;
`;
