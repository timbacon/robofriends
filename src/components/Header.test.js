import { shallow } from 'enzyme';
import React from 'react';
import Header from './Header';

test('expect to render Header component', () => {
    expect(shallow(<Header />)).toMatchSnapshot();
})