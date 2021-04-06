import React from 'react';
import { ButtonSubmitProps } from '../../../interfaces/props';
import { ButtonSubmitStyles } from './ButtonSubmit.styles';

const ButtonSubmit = ({ children, ...rest }: ButtonSubmitProps) => {
  return <ButtonSubmitStyles {...rest}>{children}</ButtonSubmitStyles>;
};

export default ButtonSubmit;
