import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

test('render Text', () => {
  shallow(<Text type="main">hola</Text>);
});
