import React from 'react';
import styled from 'styled-components';
import { Form } from 'formik';
import { map } from 'ramda';
import { Input } from '../../common/form/styles';
import Button from '../../common/Button';
import { Fieldset } from '../../common/form/FormFields';

const LoginFormFields = [
  {
    name: 'email',
    placeholder: 'Vaše jméno',
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
    <Button type="submit">Přihlásit se</Button>
  </FormWrapper>
);

const FormWrapper = styled(Form)`
  & > * {
    margin-bottom: 16px;
  }
`;
