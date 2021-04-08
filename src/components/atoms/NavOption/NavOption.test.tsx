import React from 'react';
import { shallow } from 'enzyme';
import NavOption from './NavOption';

test('render NavOption', () => {
  shallow(<NavOption name="aasdf" label="asdf" />);
});
