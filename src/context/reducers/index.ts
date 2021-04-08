import UsersReducer from './user.reducers';
import FilesReducer from './files.reducers';
import { combineReducers } from 'redux';

export default combineReducers({
  user: UsersReducer,
  files: FilesReducer,
});
