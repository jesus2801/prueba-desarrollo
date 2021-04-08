import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  AppCtx,
  Employee,
  EmployeesFields,
} from '../../../interfaces/context';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';
import SelectSprite from '../../atoms/SelectSprite';
import { EmployeesGrid } from './Employees.styles';

const EmployeeTable = () => {
  const employees = useSelector((state: AppCtx) => state.files.employees);

  const [actualEmployees, setActualEmployees] = useState(
    [] as Employee[]
  );

  useEffect(() => {
    if (employees.length !== 0) {
      setActualEmployees(employees);
    }
  }, [employees]);

  const handleSearch = () => {
    const field = document.getElementById('field-e') as HTMLSelectElement;

    const compare = document.getElementById(
      'compare-e'
    ) as HTMLSelectElement;
    const search = document.getElementById(
      'search-e'
    ) as HTMLInputElement;

    if (field.value === '' || search.value === '') {
      setActualEmployees(employees);
      return;
    }

    switch (compare.value) {
      case '==':
        setActualEmployees(
          employees.filter(
            s => s[field.value as EmployeesFields] == search.value
          )
        );
        break;

      case '<':
        setActualEmployees(
          employees.filter(
            s => s[field.value as EmployeesFields] < search.value
          )
        );
        break;

      case '>':
        setActualEmployees(
          employees.filter(
            s => s[field.value as EmployeesFields] > search.value
          )
        );
        break;

      case '<=':
        setActualEmployees(
          employees.filter(
            s => s[field.value as EmployeesFields] <= search.value
          )
        );
        break;

      case '>=':
        setActualEmployees(
          employees.filter(
            s => s[field.value as EmployeesFields] >= search.value
          )
        );
        break;
    }
  };

  return (
    <EmployeesGrid>
      <div className="filters">
        <Select minWidth="240px" id="field-e" onChange={handleSearch}>
          <option value="">Seleccione un campo</option>
          <option value="employeeId">EmployeeId</option>
          <option value="name">Name</option>
          <option value="age">Age</option>
          <option value="cc">cc</option>
          <option value="potisiton">Potisiton</option>
        </Select>

        <SelectSprite />

        <Select minWidth="200px" id="compare-e" onChange={handleSearch}>
          <option value="==">Igual a</option>
          <option value="<">Menor a</option>
          <option value=">">Mayor a</option>
          <option value="<=">Menor igual a</option>
          <option value=">=">Mayor igual a</option>
        </Select>

        <Input
          placeholder="Término de busqueda"
          id="search-e"
          onChange={handleSearch}
        />
      </div>

      <div className="table">
        <div>
          <p>
            <b>EmployeeId</b>
          </p>
          <p>
            <b>Name</b>
          </p>
          <p>
            <b>Age</b>
          </p>
          <p>
            <b>cc</b>
          </p>
          <p>
            <b>Potisiton</b>
          </p>
        </div>
        {actualEmployees.map(s => (
          <div key={s.employeeId}>
            <p>{s.employeeId}</p>
            <p>{s.name}</p>
            <p>{s.age}</p>
            <p>{s.cc}</p>
            <p>{s.potisiton}</p>
          </div>
        ))}
      </div>
    </EmployeesGrid>
  );
};

export default EmployeeTable;
