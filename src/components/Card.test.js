import { shallow } from 'enzyme';
import React from 'react';
import Card from './Card';

test('expect to render Card component', () => {
    expect(shallow(<Card />).length).toEqual(1)
})