import { AnyAction, Dispatch } from 'redux';
import { CHANGE_USER } from '../types';

export function setUserAuth(state: boolean) {
  return (dispatch: Dispatch) => {
    dispatch(initSetUserAuth(state));
  };
}

const initSetUserAuth = (state: boolean): AnyAction => ({
  type: CHANGE_USER,
  payload: state,
});
