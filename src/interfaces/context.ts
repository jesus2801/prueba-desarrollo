import { Action } from 'redux';

export interface UserCtx {
  isAuthenticate: boolean;
  userInfo: UserInformation | null;
}

export interface FileInfo {
  fileId: number;
  userId: number;
  rute: string;
  name: string;
}

export interface UserInformation {
  mail: string;
}

export interface Employee {
  employeeId: number;
  name: string;
  age: number;
  cc: string;
  potisiton: string;
}

export interface Sales {
  saleId: number;
  cost: number;
  price: number;
  client: string;
  commission: number;
}

export type EmployeesFields =
  | 'employeeId'
  | 'name'
  | 'age'
  | 'cc'
  | 'potisiton';

export type SalesFields =
  | 'saleId'
  | 'cost'
  | 'price'
  | 'client'
  | 'commission';

export interface FilesCtx {
  employees: Employee[];
  sales: Sales[];
}

export interface AppActions extends Action {
  payload: any;
}

export interface AppCtx {
  user: UserCtx;
  files: FilesCtx;
}
