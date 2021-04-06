import React from 'react';

import { SvgProps } from '../../interfaces/props';

import { objectError } from '../../utils/constants';

const Svg = ({ path, ...rest }: SvgProps) => {
  return (
    <object type="image/svg+xml" data={path} {...rest}>
      {objectError}
    </object>
  );
};

export default Svg;
