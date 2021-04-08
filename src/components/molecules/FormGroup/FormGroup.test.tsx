import React from 'react';
import { shallow } from 'enzyme';
import FormGroup from './FormGroup';

test('render FormGroup', () => {
  shallow(<FormGroup>hola</FormGroup>);
});
