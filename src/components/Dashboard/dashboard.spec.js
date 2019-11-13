import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from './index';
import testData from '../../../example_api_response.json';

describe('Dashboard', () => {
  test('should render and match snapshot', () => {
    const wrapper = shallow(<Dashboard data={testData.data} />);

    expect(wrapper).toMatchSnapshot();
  });
});
