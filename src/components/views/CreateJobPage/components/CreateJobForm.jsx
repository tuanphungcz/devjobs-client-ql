import React from 'react';
import { Form } from 'formik';
import { map } from 'ramda';
import styled from 'styled-components';
import TextEditor from '../../../common/form/TextEditor';
import { Fieldset } from '../../../common/form/FormFields';
import CreatableReactInput from './CreatableReactInput';
import { Input } from '../../../common/form/styles';
import Emoji from '../../../common/Emoji';
import Section from '../../../common/Section';
import Button from '../../../common/Button';
import Card from '../../../common/Card';
import { jobCities, jobWorkingTime, jobCategories, jobTechnologies } from '../jobModels';

const generateFormFields = ({ setFieldValue, handleChange }) => [
  {
    name: 'title',
    label: 'Pozice',
    helper: 'Např. Front end developer, Back end developer, Ios developer',
    component: Input,
  },
  {
    name: 'description',
    onChange: val => setFieldValue('description', val),
    label: 'Popis pracovní pozice',
    helper: 'Naplň práce, požadavký, benefity, proč zrovna my jsme ta nejvíc cool firma?',
    component: TextEditor,
  },
  {
    name: 'location',
    label: 'Lokace',
    helper: 'Města přidávejte stisknutím "Enter".',
    setFieldValue,
    onChange: handleChange,
    menuHidden: true,
    component: CreatableReactInput,
    options: jobCities,
  },
  {
    name: 'workingTime',
    label: 'Pracovní úvazek',
    component: CreatableReactInput,
    setFieldValue,
    onChange: handleChange,
    options: jobWorkingTime,
  },
  {
    name: 'category',
    label: 'Kategorie',
    component: CreatableReactInput,
    setFieldValue,
    onChange: handleChange,
    options: jobCategories,
  },
  {
    name: 'tags',
    label: 'Jaké technologie používáme',
    helper: 'Technologie přidávejte stisknutím "Enter".',
    setFieldValue,
    onChange: handleChange,
    component: CreatableReactInput,
    options: jobTechnologies,
  },
];

const renderFields = map(field => <Fieldset key={field.name} {...field} required />);

export default ({ setFieldValue, handleChange }) => {
  const formFields = generateFormFields({ setFieldValue, handleChange });
  return (
    <Section>
      <Form>
        <FormWrapper>
          <FormIcon>
            <Emoji value="👨‍💻" /> Job inzerát
          </FormIcon>
          {renderFields(formFields)}
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
