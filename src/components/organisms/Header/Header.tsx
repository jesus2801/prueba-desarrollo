import React from 'react';
import HeaderOptions from '../../molecules/HeaderOptions/HeaderOptions';
import Profile from '../../molecules/Profile/Profile';
import { HeaderDiv } from './Header.styles';

const Header = () => {
  return (
    <HeaderDiv>
      <HeaderOptions />
      <Profile />
    </HeaderDiv>
  );
};

export default Header;
