import { resetSearch, setSearch } from './actions';
import { RESET_SEARCH, SEARCH_CHANGE } from './constants';

describe('resetSearch', () => {
  it('returns the correct action', () => {
    expect(resetSearch()).toEqual({
      type: RESET_SEARCH,
    });
  });
});

describe('setSearch', () => {
  it('returns the correct action', () => {
    const searchTearm = 'foo';

    expect(setSearch(searchTearm)).toEqual({
      type: SEARCH_CHANGE,
      payload: searchTearm,
    });
  });
});
