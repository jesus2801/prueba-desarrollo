import React from 'react';
import { shallow } from 'enzyme';
import ButtonSubmit from './ButtonSubmit';

test('render ButtonSubmit', () => {
  shallow(<ButtonSubmit>button</ButtonSubmit>);
});
