import { CHANGE_USER, SET_USER_INFO } from '../types';
import { AppActions, UserCtx } from '../../interfaces/context';

const initState: UserCtx = {
  isAuthenticate: true,
  userInfo: null,
};

const reducer = (state = initState, action: AppActions): UserCtx => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
      };

    case CHANGE_USER:
      if (action.payload === false) localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticate: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
