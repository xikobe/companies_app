import { SEARCH_CHANGE, RESET_SEARCH } from './constants';

export const setSearch = (value) => ({
  type: SEARCH_CHANGE,
  payload: value,
});

export const resetSearch = () => ({
  type: RESET_SEARCH,
});
