import React from 'react';
import NavOption from '../../atoms/NavOption/NavOption';
import { HeaderOptionsDiv } from './HeaderOptions.styles';

const HeaderOptions = () => {
  return (
    <HeaderOptionsDiv>
      <NavOption name="statistics" label="inserta <br /> manualmente" />
      <NavOption name="excel" label="inserta con <br /> excel" />
      <h3>asdf</h3>
    </HeaderOptionsDiv>
  );
};

export default HeaderOptions;
