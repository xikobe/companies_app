import { combineReducers } from 'redux';
import { FETCH_APPS_PENDING, FETCH_APPS_FULFILLED, FETCH_APPS_REJECTED } from './constants';
import { parseCategories, parseAppsData } from './utils';

const initialState = {
  data: {},
  isLoading: false,
  error: null,
  categories: {},
};

const data = (state = initialState.data, { type, payload } = {}) => {
  switch (type) {
    case FETCH_APPS_FULFILLED:
      return parseAppsData(payload);
    default:
      return state;
  }
};

const error = (state = initialState.error, { type, payload } = {}) => {
  switch (type) {
    case FETCH_APPS_REJECTED:
      return payload;
    default:
      return state;
  }
};

const isLoading = (state = initialState.isLoading, { type } = {}) => {
  switch (type) {
    case FETCH_APPS_PENDING:
      return true;
    case FETCH_APPS_FULFILLED:
    case FETCH_APPS_REJECTED:
      return false;
    default:
      return state;
  }
};

export const categories = (state = initialState.categories, { type, payload }) => {
  switch (type) {
    case FETCH_APPS_FULFILLED:
      return parseCategories(payload);
    default:
      return state;
  }
};

export default combineReducers({
  data,
  isLoading,
  error,
  categories,
});
