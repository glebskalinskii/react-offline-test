import React from 'react';
import { shallow } from 'enzyme';
import Legend from './index';
import testData from '../../../example_api_response.json';

describe('Legend', () => {
  test('should render and match snapshot', () => {
    const wrapper = shallow(<Legend
        data={testData.data.generationmix}
        activeIndex={null}
        setActiveIndex={() => {}}
      />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should highlight active item and match snapshot', () => {
    const wrapper = shallow(<Legend
        data={testData.data.generationmix}
        activeIndex={0}
        setActiveIndex={() => {}}
      />);

    expect(wrapper).toMatchSnapshot();
  });

  test('should call mouseenter callback', () => {
    const setActiveIndexMock = jest.fn();

    const wrapper = shallow(<Legend
        data={testData.data.generationmix}
        activeIndex={null}
        setActiveIndex={setActiveIndexMock}
      />);
    const firstItem = wrapper.find('li').first();

    firstItem.simulate('mouseenter');

    expect(setActiveIndexMock.mock.calls.length).toBe(1);
    expect(setActiveIndexMock.mock.calls[0][0]).toBe(0);
  });

  test('should call mouseleave callback', () => {
    const setActiveIndexMock = jest.fn();

    const wrapper = shallow(<Legend
        data={testData.data.generationmix}
        activeIndex={null}
        setActiveIndex={setActiveIndexMock}
      />);
    const firstItem = wrapper.find('li').first();

    firstItem.simulate('mouseleave');

    expect(setActiveIndexMock.mock.calls.length).toBe(1);
    expect(setActiveIndexMock.mock.calls[0][0]).toBe(null);
  });
});

