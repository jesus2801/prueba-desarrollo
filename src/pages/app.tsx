import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/organisms/Header/Header';
import SideBar from '../components/organisms/SideBar/SideBar';
import Statistics from '../components/organisms/Statistics/Statistics';

import { AppCtx } from '../interfaces/context';
import { MainCtn } from '../styles/pages/app';
import Login from './auth/login';

const app = () => {
  const isAuthenticate = useSelector(
    (state: AppCtx) => state.user.isAuthenticate
  );

  return isAuthenticate ? (
    <>
      <Header />
      <MainCtn>
        <SideBar />
        <Statistics />
      </MainCtn>
    </>
  ) : (
    <Login />
  );
};

export default app;
