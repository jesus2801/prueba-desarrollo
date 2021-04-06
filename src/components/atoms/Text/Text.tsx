import React from 'react';
import { TextProps } from '../../../interfaces/props';
import { TextParagraph } from './Text.styles';

const Text = ({ type, size, children, margin, ...rest }: TextProps) => {
  const theme = {
    size: size ? size : 'unset',
    color: type === 'desc' ? 'var(--grey)' : 'var(--black)',
    margin: margin ? margin : 'unset',
  };

  return <TextParagraph theme={theme} {...rest}>{children}</TextParagraph>;
};

export default Text;
