import React from 'react';
import { FastField } from 'formik';
import { TextLabel, Required, Helper, ErrorLabel, Input } from './styles';

const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

export const Fieldset = ({
  component = Input,
  render,
  name,
  hideLabel = false,
  label,
  helper,
  required,
  ...rest
}) => (
  <FastField
    name={name}
    render={({ field, form }) => {
      const error = form.touched[name] && form.errors[name];

      const fieldLabel =
        (hideLabel && null) ||
        (label && label) ||
        (name && !hideLabel && capitalizeFirstLetter(name));

      const createField = component =>
        React.isValidElement(component)
          ? component
          : React.createElement(component, {
              ...field,
              ...rest,
              invalid: error ? error : false,
            });

      return (
        <div>
          <TextLabel htmlFor={name}>
            {fieldLabel}
            {required && <Required>*</Required>}
          </TextLabel>{' '}
          {render
            ? render({ field, form, ...rest }) // render prop inception
            : createField(component)}
          {helper ? <Helper>{helper}</Helper> : false}
          {error ? <ErrorLabel>{error}</ErrorLabel> : false}
        </div>
      );
    }}
  />
);
