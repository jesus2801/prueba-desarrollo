import UsersReducer from './user.reducers';
import { combineReducers } from 'redux';

export default combineReducers({
  user: UsersReducer,
});
