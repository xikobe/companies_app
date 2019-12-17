import React from 'react';
import { shallow } from 'enzyme';
import Pagination from './index';
import { PrevButton, NextButton, PageItem } from './styles';

const mockSetCurrentPage = jest.fn();
const defaultProps = {
  currentPage: 1,
  pages: [],
  setCurrentPage: mockSetCurrentPage,
};

const shallowRender = (props) => shallow(<Pagination {...defaultProps} {...props} />);

describe('Pagination', () => {
  it('renders null if pages has less than 2 length', () => {
    const wrapper = shallowRender();

    expect(wrapper.isEmptyRender()).toBe(true);
  });

  it('renders NextButton and PrevButton correctly when current page is first', () => {
    const wrapper = shallowRender({
      pages: [1, 2, 3],
      currentPage: 1,
    });

    expect(wrapper.find(PrevButton).exists()).toBe(false);
    expect(wrapper.find(NextButton).exists()).toBe(true);
  });

  it('renders NextButton and PrevButton correctly when current page is last', () => {
    const wrapper = shallowRender({
      pages: [1, 2, 3],
      currentPage: 3,
    });

    expect(wrapper.find(PrevButton).exists()).toBe(true);
    expect(wrapper.find(NextButton).exists()).toBe(false);
  });

  it('renders PageItem with the correct isActive prop', () => {
    const wrapper = shallowRender({
      pages: [1, 2, 3],
      currentPage: 3,
    });

    expect(wrapper.find(PageItem).map((node) => node.prop('isActive')))
      .toEqual([false, false, true].map((isActive) => isActive));
  });
});
