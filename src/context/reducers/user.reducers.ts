import { CHANGE_USER } from '../types';
import { AppActions, UserCtx } from '../../interfaces/context';

const initState: UserCtx = {
  isAuthenticate: true,
};

const reducer = (state = initState, action: AppActions): UserCtx => {
  switch (action.type) {
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
