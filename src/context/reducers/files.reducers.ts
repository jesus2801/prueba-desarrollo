import { SET_EMPLOYEES, SET_SALES } from '../types';
import { AppActions, FilesCtx } from '../../interfaces/context';

const initState: FilesCtx = {
  employees: [],
  sales: [],
};

const reducer = (state = initState, action: AppActions): FilesCtx => {
  switch (action.type) {
    case SET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload,
      };

    case SET_SALES:
      return {
        ...state,
        sales: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
