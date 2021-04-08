import React from 'react';

import { useDispatch } from 'react-redux';
import { setData } from '../../../context/actions/files.actions';
import NavOption from '../../atoms/NavOption/NavOption';
import { HeaderOptionsDiv } from './HeaderOptions.styles';

const HeaderOptions = () => {
  const dispatch = useDispatch();

  return (
    <HeaderOptionsDiv>
      <NavOption
        name="restart"
        label="recargar datos"
        onClick={() => dispatch(setData())}
      />
    </HeaderOptionsDiv>
  );
};

export default HeaderOptions;
