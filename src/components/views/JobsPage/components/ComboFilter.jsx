import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { filter } from 'ramda';
import AutoTypeSearchSelect from '../../../common/AutoTypeSearchSelect';
import { jobCities, jobWorkingTime, jobCategories } from '../../CreateJobPage/jobModels';
import { FONT_SIZE_SMALL } from '../../../../constant';

const cities = [
  { value: 'praha', label: 'Praha' },
  { value: 'brno', label: 'Brno' },
  { value: 'remote', label: 'Remote' },
];

class ComboFilter extends Component {
  handleOnClick = e => {
    this.props.handleOnFinalChange({
      city: filter(city => city.value === e.target.value, cities),
    });
  };

  render() {
    const { values, handleOnFinalChange } = this.props;
    return (
      <FiltersWrapper>
        <div>
          <Label>Pozice</Label>
          <AutoTypeSearchSelect
            handleOnFinalChange={handleOnFinalChange}
            name="search"
            finalValue={values.search}
            options={jobCategories}
          />
        </div>
        <div>
          <Label>Pracovní uvazek</Label>
          <AutoTypeSearchSelect
            handleOnFinalChange={handleOnFinalChange}
            name="workingTime"
            finalValue={values.workingTime}
            options={jobWorkingTime}
          />
        </div>
        <div>
          <Label>Lokace</Label>
          <AutoTypeSearchSelect
            handleOnFinalChange={handleOnFinalChange}
            name="cities"
            finalValue={values.cities}
            options={jobCities}
          />
        </div>
        {/* <div>
          {map(
            city => (
              <button key={city.value} value={city.value} onClick={this.handleOnClick}>
                {city.label}
              </button>
            ),
            cities
          )}
        </div> */}
      </FiltersWrapper>
    );
  }
}

const Label = styled.div`
  margin-bottom: 8px;
  font-size: ${FONT_SIZE_SMALL};
`;

const FiltersWrapper = styled.div`
  background: #eceff3;
  height: 250px;
  padding: 24px;
  border-radius: 6px;
  & > div {
    margin-bottom: 16px;
  }
`;

export default withRouter(ComboFilter);
