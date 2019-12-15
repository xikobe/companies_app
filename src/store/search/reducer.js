import { combineReducers } from 'redux';
import { SEARCH_CHANGE } from './constants';

const initialState = {
  value: '',
};

export const value = (state = initialState.value, { payload, type }) => {
  switch (type) {
    case SEARCH_CHANGE:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  value,
});
