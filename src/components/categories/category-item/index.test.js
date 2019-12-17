import React from 'react';
import { shallow } from 'enzyme';
import CategoryItem from './index';
import { useCategoriesContext } from '../../../contexts/categoriesContext';
import { Item } from './styles';

jest.mock('../../../contexts/categoriesContext');

const mockToggle = jest.fn();
useCategoriesContext.mockImplementation(() => ({
  toggleActiveCategory: mockToggle,
  isCategoryActive: () => false,
}));

describe('CategoryItem', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<CategoryItem name="Foo" />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(Item).prop('isActive')).toBe(false);
  });

  it('should call toggleActiveCategory on click', () => {
    const wrapper = shallow(<CategoryItem name="Foo" />);

    wrapper.find(Item).simulate('click');

    expect(mockToggle).toHaveBeenCalledWith('Foo');
  });
});
