import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { AppCtx, Sales, SalesFields } from '../../../interfaces/context';
import Input from '../../atoms/Input/Input';
import Select from '../../atoms/Select/Select';
import SelectSprite from '../../atoms/SelectSprite';
import { SalesGrid } from './SalesTable.styles';

const SalesTable = () => {
  const sales = useSelector((state: AppCtx) => state.files.sales);

  const [actualSales, setActualSales] = useState([] as Sales[]);

  useEffect(() => {
    if (sales.length !== 0) {
      setActualSales(sales);
    }
  }, [sales]);

  const handleSearch = () => {
    const field = document.getElementById('field') as HTMLSelectElement;

    const compare = document.getElementById(
      'compare'
    ) as HTMLSelectElement;
    const search = document.getElementById('search') as HTMLInputElement;

    if (field.value === '' || search.value === '') {
      setActualSales(sales);
      return;
    }

    switch (compare.value) {
      case '==':
        setActualSales(
          sales.filter(s => s[field.value as SalesFields] == search.value)
        );
        break;

      case '<':
        setActualSales(
          sales.filter(s => s[field.value as SalesFields] < search.value)
        );
        break;

      case '>':
        setActualSales(
          sales.filter(s => s[field.value as SalesFields] > search.value)
        );
        break;

      case '<=':
        setActualSales(
          sales.filter(s => s[field.value as SalesFields] <= search.value)
        );
        break;

      case '>=':
        setActualSales(
          sales.filter(s => s[field.value as SalesFields] >= search.value)
        );
        break;
    }
  };

  return (
    <SalesGrid>
      <div className="filters">
        <Select minWidth="240px" id="field" onChange={handleSearch}>
          <option value="">Seleccione un campo</option>
          <option value="saleId">SaleId</option>
          <option value="cost">Cost</option>
          <option value="price">Price</option>
          <option value="client">Client</option>
          <option value="commission">Commission</option>
        </Select>

        <SelectSprite />

        <Select minWidth="200px" id="compare" onChange={handleSearch}>
          <option value="==">Igual a</option>
          <option value="<">Menor a</option>
          <option value=">">Mayor a</option>
          <option value="<=">Menor igual a</option>
          <option value=">=">Mayor igual a</option>
        </Select>

        <Input
          placeholder="Término de busqueda"
          id="search"
          onChange={handleSearch}
        />
      </div>

      <div className="table">
        <div>
          <p>
            <b>SaleId</b>
          </p>
          <p>
            <b>Cost</b>
          </p>
          <p>
            <b>Price</b>
          </p>
          <p>
            <b>Client</b>
          </p>
          <p>
            <b>Commission</b>
          </p>
        </div>
        {actualSales.map(s => (
          <div key={s.saleId}>
            <p>{s.saleId}</p>
            <p>{s.cost}</p>
            <p>{s.price}</p>
            <p>{s.client}</p>
            <p>{s.commission}</p>
          </div>
        ))}
      </div>
    </SalesGrid>
  );
};

export default SalesTable;
