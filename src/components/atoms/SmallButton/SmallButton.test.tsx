import React from 'react';
import { shallow } from 'enzyme';
import SmallButton from './SmallButton';

test('render SmallButton', () => {
  shallow(
    <SmallButton color="#ffffff" margin="0">
      hola
    </SmallButton>
  );
});
