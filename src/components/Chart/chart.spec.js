import React from 'react';
import { shallow } from 'enzyme';
import Chart from './index';
import testData from '../../../example_api_response.json';

describe('Chart', () => {
  test('should render and match snapshot', () => {
    const wrapper = shallow(<Chart
        data={testData.data.generationmix}
        activeIndex={null}
        setActiveIndex={() => {}}
      />);

    expect(wrapper).toMatchSnapshot();
  });
});
