import { selectSearchValue } from './selectors';

describe('selectSearchValue', () => {
  it('should return the correct value from state', () => {
    const state = {
      search: { value: 'foo' },
    };

    expect(selectSearchValue(state)).toBe('foo');
  });

  it('should handle an empty state correctly', () => {
    expect(selectSearchValue({})).toBe('');
  });
});
