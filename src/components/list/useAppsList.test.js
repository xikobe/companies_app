import { renderHook } from '@testing-library/react-hooks';
import { useSelector } from 'react-redux';
import useAppsList from './useAppsList';
import { useCategoriesContext } from '../../contexts/categoriesContext';
import {
  selectAppsIds, selectAppsListIsLoaded, selectAppsByCategory, selectAppsObject,
} from '../../store/apps-list/selectors';
import { selectSearchValue } from '../../store/search/selectors';

jest.mock('react-redux');
jest.mock('../../contexts/categoriesContext');
jest.mock('../../store/apps-list/selectors');
jest.mock('../../store/search/selectors');

useSelector.mockImplementation((selector) => selector());

const mockAppsList = [1, 2, 3];

describe('useAppsList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('returns list from state if no active categories or search', () => {
    selectAppsIds.mockReturnValue(mockAppsList);
    selectAppsListIsLoaded.mockReturnValue(true);
    selectAppsObject.mockReturnValue({
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 },
    });
    selectSearchValue.mockReturnValue('');
    selectAppsByCategory.mockReturnValue({
      Foo: [1, 3],
      Bar: [2],
    });

    useCategoriesContext.mockReturnValue({
      activeCategories: [],
      clearCategories: jest.fn(),
    });

    const { result } = renderHook(() => useAppsList());

    expect(result.current[0]).toEqual(mockAppsList);
  });

  it('returns list filtered by categories', () => {
    selectAppsIds.mockReturnValue(mockAppsList);
    selectAppsListIsLoaded.mockReturnValue(true);
    selectSearchValue.mockReturnValue('');
    selectAppsByCategory.mockReturnValue({
      Foo: [1, 3],
      Bar: [2],
    });
    selectAppsObject.mockReturnValue({
      1: { id: 1 },
      2: { id: 2 },
      3: { id: 3 },
    });

    useCategoriesContext.mockReturnValue({
      activeCategories: ['Foo'],
      clearCategories: jest.fn(),
    });

    const { result } = renderHook(() => useAppsList());

    expect(result.current[0]).toEqual([1, 3]);
  });

  it('returns list filtered by search terms and clears active categories if not empty', () => {
    selectAppsIds.mockReturnValue(mockAppsList);
    selectAppsListIsLoaded.mockReturnValue(true);
    selectSearchValue.mockReturnValue('biz');
    selectAppsByCategory.mockReturnValue({
      Foo: [1, 3],
      Bar: [2],
    });
    selectAppsObject.mockReturnValue({
      1: { id: 1, searchTerms: 'biz' },
      2: { id: 2, searchTerms: 'aaa' },
      3: { id: 3, searchTerms: 'bbb' },
    });

    const mockClearCategories = jest.fn();

    useCategoriesContext.mockReturnValue({
      activeCategories: ['Foo'],
      clearCategories: mockClearCategories,
    });

    const { result } = renderHook(() => useAppsList());

    expect(result.current[0]).toEqual([1]);
    expect(mockClearCategories).toHaveBeenCalled();
  });
});
