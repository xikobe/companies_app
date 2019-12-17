import React from 'react';
import { shallow } from 'enzyme';
import { useSelector } from 'react-redux';
import Categories from './index';
import CategoryItem from './category-item';

jest.mock('react-redux');

const mockCategories = ['Foo', 'Bar'];
useSelector.mockImplementation(() => mockCategories);

describe('Categories', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<Categories />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(CategoryItem)).toHaveLength(mockCategories.length);
    expect(wrapper.find(CategoryItem).map((node) => node.props()))
      .toEqual(mockCategories.map((cat) => ({ name: cat })));
  });
});
