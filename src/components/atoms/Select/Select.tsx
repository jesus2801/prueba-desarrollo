import React from 'react';

import { SelectProps } from '../../../interfaces/props';
import { SelectCtn } from './Select.styles';

const Select = ({ children, minWidth, width, ...rest }: SelectProps) => {
  const theme = {
    minWidth,
    width: width ? width : 'auto',
  };

  return (
    <SelectCtn theme={theme} htmlFor="slct" className="select">
      <select id="slct" required={true} {...rest}>
        {children}
      </select>

      <svg>
        <use xlinkHref="#select-arrow-down"></use>
      </svg>
    </SelectCtn>
  );
};

export default Select;
