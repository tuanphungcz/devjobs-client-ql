import React from 'react';
import { Form } from 'formik';
import { map } from 'ramda';
import styled from 'styled-components';
import { Fieldset } from '../../../common/form/FormFields';
import { Input, TextArea } from '../../../common/form/styles';
import Emoji from '../../../common/Emoji';
import Section from '../../../common/Section';
import Button from '../../../common/Button';
import Card from '../../../common/Card';

const generateComapnyFormFields = () => [
  {
    name: 'companyName',
    label: 'Název firmy',
    component: Input,
  },
  {
    name: 'companyDescription',
    label: 'Popis firmy',
    helper: 'Ideálně v pár větách popis firmy',
    component: TextArea,
    rows: 4,
  },
  {
    name: 'contactLinkOrEmail',
    label: 'Kontaktní email nebo link',
    helper:
      'Způsob, jak Vás kandidát může oslovit. Může být email, nebo odkaz na web nebo pracovní inzerát.',
    component: Input,
  },
  {
    name: 'companyLogoUrl',
    label: 'Firemní logo (url)',
    placeholder: 'Např. https://www.google.com/image-logo-123',
    helper:
      'Uploadovaní fotek naimplementuji, jakmile budeme mit více inzerátu 🤓',
    component: Input,
  },
  {
    name: 'companyCoverImageUrl',
    label: 'Firemní cover image (url)',
    placeholder: 'Např. https://www.google.com/image-cover-3333',
    helper:
      'Opět se omlouvám, zatím se mi to cašově nevyplatí, programuju po večerech a momentálně je 01:32 😂',
    component: Input,
  },
  {
    name: 'companyWebsite',
    label: 'Firemní web',
    placeholder: 'Např. https://www.devjobs.cz',
    helper: 'Odkaz na vaše webové stránky',
    component: Input,
  },
];

export default ({ setFieldValue, handleChange, errors }) => {
  const companyFields = generateComapnyFormFields({
    setFieldValue,
    handleChange,
  });

  return (
    <Section>
      <Form>
        <FormWrapper>
          <FormIcon>
            <Emoji value="🏬" />Firma
          </FormIcon>
          {map(
            field => <Fieldset key={field.name} {...field} required />,
            companyFields,
          )}
        </FormWrapper>
        <ButtonWrapper>
          <Button type="submit">Vložit pozici</Button>
        </ButtonWrapper>
      </Form>
    </Section>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px;
`;

const FormWrapper = styled(Card)`
  border-radius: 5px;
  background: white;
  padding: 24px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 64px;
  position: relative;

  & > * {
    margin-bottom: 32px;
  }
`;

const FormIcon = styled.div`
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
  padding: 0 16px;
  font-weight: bold;
  text-transform: uppercase;
`;
