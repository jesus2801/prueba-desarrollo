import { Action } from 'redux';

export interface UserCtx {
  isAuthenticate: boolean;
}

export interface AppActions extends Action {
  payload: any;
}

export interface AppCtx {
  user: UserCtx;
}
