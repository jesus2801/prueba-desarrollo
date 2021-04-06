import React from 'react';
import { SmallButtonProps } from '../../../interfaces/props';
import { SmallButtonStyles } from './SmallButton.styles';

const SmallButton = ({ margin, color, children }: SmallButtonProps) => {
  const theme = {
    color,
    margin,
  };

  return <SmallButtonStyles theme={theme}>{children}</SmallButtonStyles>;
};

export default SmallButton;
