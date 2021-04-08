import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

test('render Select', () => {
  shallow(
    <Select minWidth="200px">
      <option value="">Seleccionar</option>
    </Select>
  );
});
