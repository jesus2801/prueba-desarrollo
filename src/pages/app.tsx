import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { axiosClient } from '../config/axios';
import { setUserAuth } from '../context/actions/user.actions';
import { authToken } from '../functions';
import { AppCtx } from '../interfaces/context';
import Login from './auth/login';

const app = () => {
  const isAuthenticate = useSelector(
    (state: AppCtx) => state.user.isAuthenticate
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const main = async () => {
      const token = localStorage.getItem('token');
      authToken(token);

      const response = await axiosClient.post('/auth/verifyUser');
      dispatch(setUserAuth(response.data));
    };

    main();
  });

  return isAuthenticate ? (
    <div>
      <h1>asdfa</h1>
      <button onClick={() => dispatch(setUserAuth(false))}>
        Cerrar sesión
      </button>
    </div>
  ) : (
    <Login />
  );
};

export default app;
