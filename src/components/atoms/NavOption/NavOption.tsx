import React from 'react';
import { NavOptionsProps } from '../../../interfaces/props';
import Text from '../Text/Text';
import { NavOptionDiv } from './NavOption.styles';

const NavOption = ({ name, label }: NavOptionsProps) => {
  return (
    <NavOptionDiv>
      <img src={`/static/icons/nav/${name}.webp`} alt={`${name} icon`} />
      <Text
        type="main"
        size="14px"
        dangerouslySetInnerHTML={{ __html: label }}
      >
        {}
      </Text>
    </NavOptionDiv>
  );
};

export default NavOption;
