import React, { Component } from 'react';
import { map } from 'ramda';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { JOBS_FILTER_QUERY, JOBS_QUERY } from '../../../queries';
import JobList from './components/JobList';
import HeroHeader from './components/HeroHeader';
import Section from '../../common/Section';
import ComboFilter from './components/ComboFilter';
import { FONT_SIZE_LARGE } from '../../../constant';
import Button from '../../common/Button';

const initialValues = {
  values: {
    workingTime: [],
    search: [],
    cities: [],
  },
};

class JobsPage extends Component {
  state = initialValues;

  handleChange = data => {
    this.setState(state => ({
      values: {
        ...state.values,
        ...data,
      },
    }));
  };

  resetValues = () => this.setState({ ...initialValues });

  showCreateJobPage = () => this.props.history.replace('/dashboard/create-job');

  render() {
    const finalFinalValue = map(x => x.value, [
      ...this.state.values.workingTime,
      ...this.state.values.search,
      ...this.state.values.cities,
    ]);

    const queryProps = {
      query: finalFinalValue.length > 0 ? JOBS_FILTER_QUERY : JOBS_QUERY,
      variables: {
        filter: finalFinalValue.length > 0 ? finalFinalValue : null,
      },
    };

    const comboFilterProps = {
      handleOnFinalChange: this.handleChange,
      values: this.state.values,
    };

    return (
      <Query {...queryProps}>
        {({ data: { jobs } }) => (
          <React.Fragment>
            <HeroHeader />
            <LayoutWrapper>
              <JobsWrapper>
                <HeadLine>Pracovní nabídky</HeadLine>
                <JobsWrapper>
                  <JobList jobs={jobs} handleOnFinalChange={this.handleOnFinalChange} />
                </JobsWrapper>
              </JobsWrapper>
              <PanelWrapper>
                <HeadLine>
                  <Button small green width={288} onClick={this.showCreateJobPage}>
                    Post a job
                  </Button>
                </HeadLine>
                <ComboFilter {...comboFilterProps} />
              </PanelWrapper>
            </LayoutWrapper>
          </React.Fragment>
        )}
      </Query>
    );
  }
}

export default withRouter(JobsPage);

const HeadLine = styled.div`
  font-size: ${FONT_SIZE_LARGE};
  font-weight: 400;
  margin: 24px 0;
  height: 40px;
  display: flex;
  align-items: center;
`;

const JobsWrapper = styled.div`
  width: 100%;
  margin-right: 24px;
  & > * {
    margin-bottom: 8px;
  }
`;

const PanelWrapper = styled.div`
  width: 300px;
`;

const LayoutWrapper = styled(Section)`
  display: flex;
  justify-content: space-between;
`;
