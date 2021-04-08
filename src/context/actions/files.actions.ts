import { AnyAction, Dispatch } from 'redux';
import { axiosClient } from '../../config/axios';
import { handleLoading } from '../../functions';
import { Employee, Sales } from '../../interfaces/context';
import { SET_EMPLOYEES, SET_SALES } from '../types';

export function setData(limit?: number) {
  return async (dispatch: Dispatch) => {
    handleLoading(true);

    const employees = await axiosClient.post('/api/getEmployees');
    const sales = await axiosClient.post('/api/getSales');

    if (limit) {
      const a =
        employees.data.length > limit
          ? employees.data.slice(0, limit)
          : employees.data;

      dispatch(setEmployees(a));

      const b =
        sales.data.length > limit
          ? sales.data.slice(0, limit)
          : sales.data;

      dispatch(setSales(b));
    } else {
      dispatch(setEmployees(employees.data));
      dispatch(setSales(sales.data));
    }

    handleLoading(false);
  };
}

const setEmployees = (employees: Employee[]): AnyAction => ({
  type: SET_EMPLOYEES,
  payload: employees,
});

const setSales = (sales: Sales[]): AnyAction => ({
  type: SET_SALES,
  payload: sales,
});
