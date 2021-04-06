import React from 'react';

import { FormGroupProps } from '../../../interfaces/props';

import { FormGroupDiv } from './Fromgroup.styles';

const FormGroup = ({
  label,
  htmlFor,
  children,
  ...rest
}: FormGroupProps) => {
  return (
    <FormGroupDiv {...rest}>
      {label && <label htmlFor={htmlFor}>{label}</label>}
      {children}
    </FormGroupDiv>
  );
};

export default FormGroup;
