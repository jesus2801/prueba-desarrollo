import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setUserAuth } from '../../../context/actions/user.actions';
import { AppCtx } from '../../../interfaces/context';
import { ProfileCtn } from './Profile.styles';

const Profile = () => {
  const dispatch = useDispatch();

  const info = useSelector((state: AppCtx) => state.user.userInfo);

  return (
    <ProfileCtn>
      <img
        src="/static/icons/avatar.webp"
        alt="avatar icon"
        onClick={e => e.currentTarget.classList.toggle('active')}
      />
      <div>
        <li>{info && info.mail}</li>
        <li
          onClick={() => dispatch(setUserAuth(false, null))}
          className="click"
        >
          Cerrar sesión
        </li>
      </div>
    </ProfileCtn>
  );
};

export default Profile;
