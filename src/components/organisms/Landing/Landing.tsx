import React from 'react';
import By from '../../atoms/By/By';
import Svg from '../../atoms/Svg';
import Info from '../../molecules/Info/Info';
import { LandingDiv } from './Landing.styles';

const Landing = () => {
  return (
    <LandingDiv>
      <By />
      <Info />
      <Svg path="/static/images/landing.svg" className="image" />
    </LandingDiv>
  );
};

export default Landing;
