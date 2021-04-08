import React from 'react';
import { shallow } from 'enzyme';
import H from './H';

test('render H', () => {
  shallow(<H type="h1">title</H>);
});
