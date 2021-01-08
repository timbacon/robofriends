import { shallow } from 'enzyme';
import React from 'react';
import SearchBox from './SearchBox';

test('expect to render SearchBox component', () => {
    expect(shallow(<SearchBox />)).toMatchSnapshot();
})