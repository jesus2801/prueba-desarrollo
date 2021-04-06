import React from 'react';
import { InputProps } from '../../../interfaces/props';
import { InputStyles } from './Input.styles';

const Input = ({ ...rest }: InputProps) => {
  return <InputStyles {...rest} />;
};

export default Input;
