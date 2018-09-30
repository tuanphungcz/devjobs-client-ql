import React from 'react';
import { Form } from 'formik';
import { map } from 'ramda';
import styled from 'styled-components';
import { Input } from '../../common/form/styles';
import Button from '../../common/Button';
import { Fieldset } from '../../common/form/FormFields';

const LoginFormFields = [
  {
    name: 'name',
    placeholder: 'Vaše jméno',
  },
  {
    name: 'email',
    placeholder: 'Váš email',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Vaše heslo',
  },
];

export default () => (
  <FormWrapper>
    {map(
      field => (
        <Fieldset key={field.name} {...field} component={Input} hideLabel />
      ),
      LoginFormFields,
    )}
    <Button type="submit">Registrovat se</Button>
  </FormWrapper>
);

const FormWrapper = styled(Form)`
  & > * {
    margin-bottom: 16px;
  }
`;
