import { value, initialState } from './reducer';
import { SEARCH_CHANGE } from './constants';

describe('value reducer', () => {
  it('should handle SEARCH_CHANGE type correctly', () => {
    const result = value({}, { type: SEARCH_CHANGE, payload: 'Foo' });

    expect(result).toBe('Foo');
  });

  it('should handle other action types correctlye', () => {
    const result = value(undefined, { type: 'BAR', payload: 'Bar' });

    expect(result).toBe(initialState.value);

    const resultWithState = value('Foo', { type: 'BAR', payload: 'Bar' });

    expect(resultWithState).toBe('Foo');
  });
});
