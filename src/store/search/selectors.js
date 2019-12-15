import get from 'lodash/get';

export const selectSearchValue = (state) => get(state, 'search.value', '');
