import React from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../../../context/actions/files.actions';
import Input from '../../atoms/Input/Input';
import { SideBarDiv } from './SideBars.styles';

const SideBar = () => {
  const dispatch = useDispatch();

  return (
    <SideBarDiv>
      <Input
        placeholder="Limitar datos"
        type="number"
        min="50"
        step="1"
        onChange={e => {
          if (parseInt(e.currentTarget.value) < 50) return;

          dispatch(setData(parseInt(e.currentTarget.value)));
        }}
      />
    </SideBarDiv>
  );
};

export default SideBar;
