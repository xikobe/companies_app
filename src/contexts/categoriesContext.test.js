import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import CategoriesProvider, { useCategoriesContext } from './categoriesContext';

describe('CategoriesProvider', () => {
  const wrapper = ({ children }) => <CategoriesProvider>{ children }</CategoriesProvider>;

  it('should return the correct initial values', () => {
    const { result } = renderHook(() => useCategoriesContext(), { wrapper });

    expect(result.current).toEqual({
      toggleActiveCategory: expect.any(Function),
      activeCategories: [],
      isCategoryActive: expect.any(Function),
      clearCategories: expect.any(Function),
    });
  });

  it('toggles active categories correctly', () => {
    const { result } = renderHook(() => useCategoriesContext(), { wrapper });

    result.current.toggleActiveCategory('Foo');

    expect(result.current.activeCategories).toEqual(['Foo']);

    result.current.toggleActiveCategory('Foo');

    expect(result.current.activeCategories).toEqual([]);
  });

  it('clears active categories correctly', () => {
    const { result } = renderHook(() => useCategoriesContext(), { wrapper });

    result.current.toggleActiveCategory('Foo');
    result.current.toggleActiveCategory('Bar');
    result.current.toggleActiveCategory('Biz');

    expect(result.current.activeCategories).toEqual(['Foo', 'Bar', 'Biz']);

    result.current.clearCategories();

    expect(result.current.activeCategories).toEqual([]);
  });

  it('returns correctly if category is active', () => {
    const { result } = renderHook(() => useCategoriesContext(), { wrapper });

    expect(result.current.isCategoryActive('Foo')).toBe(false);

    result.current.toggleActiveCategory('Foo');

    expect(result.current.isCategoryActive('Foo')).toBe(true);
  });
});
