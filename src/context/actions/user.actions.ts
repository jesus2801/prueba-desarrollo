import { AnyAction, Dispatch } from 'redux';
import { UserInformation } from '../../interfaces/context';
import { CHANGE_USER, SET_USER_INFO } from '../types';

export function setUserAuth(
  state: boolean,
  info: null | UserInformation
) {
  return (dispatch: Dispatch) => {
    if (state) {
      dispatch(initSetUserAuth(true));
      dispatch(setUserInfo(info));
    } else {
      dispatch(initSetUserAuth(false));
      dispatch(setUserInfo(null));
    }
  };
}

const initSetUserAuth = (state: boolean): AnyAction => ({
  type: CHANGE_USER,
  payload: state,
});

const setUserInfo = (userInfo: UserInformation | null): AnyAction => ({
  type: SET_USER_INFO,
  payload: userInfo,
});
