import React from 'react';
import { shallow } from 'enzyme';
import Price from './index';

describe('Price component', () => {
  it('renders free if price is 0', () => {
    const wrapper = shallow(<Price price={0} />);

    expect(wrapper.text()).toEqual('Free');
  });

  it('renders price correctly given in cents', () => {
    const wrapper = shallow(<Price price={1000} />);

    expect(wrapper.text()).toEqual('10.00€');
  });
});
