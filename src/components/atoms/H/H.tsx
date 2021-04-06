import React, { memo } from 'react';
import { HProps } from '../../../interfaces/props';

import { H1, H2, H3, H4, H5, H6 } from './H.styles';

const H = ({ type, children, size, uppercase }: HProps) => {
  const theme = {
    size: size ? size : 'unset',
    uppercase: uppercase ? 'uppercase' : 'unset',
  };

  switch (type) {
    case 'h1':
      return <H1 theme={theme}>{children}</H1>;
    case 'h2':
      return <H2 theme={theme}>{children}</H2>;
    case 'h3':
      return <H3 theme={theme}>{children}</H3>;
    case 'h4':
      return <H4 theme={theme}>{children}</H4>;
    case 'h5':
      return <H5 theme={theme}>{children}</H5>;
    case 'h6':
      return <H6 theme={theme}>{children}</H6>;
  }
};

export default memo(H);
