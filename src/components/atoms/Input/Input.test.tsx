import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

test('render Input', () => {
  shallow(<Input type="text" />);
});
