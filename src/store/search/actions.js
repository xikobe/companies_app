import { SEARCH_CHANGE } from './constants';

export const setSearch = (value) => ({
  type: SEARCH_CHANGE,
  payload: value,
});
