import React, { Component } from 'react';
import { Creatable } from 'react-select';
import { compose, join, map } from 'ramda';
import * as Animated from 'react-select/lib/animated';
import { toLowerCaseAndFistUpper } from '../../../../utils';

const mapFinalValues = values => {
  const valuesArray = values.split(',');
  return map(
    item => ({ value: toLowerCaseAndFistUpper(item), label: toLowerCaseAndFistUpper(item) }),
    valuesArray
  );
};

const getListString = compose(
  join(','),
  map(x => x.value.trim())
);

const getCustomStyles = ({ menuHidden }) => {
  const menuStyles = menuHidden && {
    display: 'none',
  };

  return {
    menu: base => ({ ...base, ...menuStyles }),
  };
};

export default class CreatableReactInput extends Component {
  state = {
    finalValue: (this.props.value && mapFinalValues(this.props.value)) || [],
    options: this.props.options || [],
  };

  handOnChange = value => {
    if (value.length < (this.props.maxInputLength || 5)) {
      this.props.setFieldValue(this.props.name, getListString(value));
      this.setState({
        finalValue: value,
      });
    }
  };

  render() {
    const { menuHidden } = this.props;
    const { options, finalValue } = this.state;

    return (
      <Creatable
        isMulti
        styles={getCustomStyles({ menuHidden })}
        options={options}
        onChange={this.handOnChange}
        value={finalValue}
        components={Animated}
      />
    );
  }
}
