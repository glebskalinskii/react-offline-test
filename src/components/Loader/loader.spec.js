import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

describe('Loader', () => {
  test('renders and matches snapshot', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper).toMatchSnapshot();
  });
});
