import { combineReducers } from 'redux';

const initialState = {
  data: [],
  isLoading: false,
};

const data = (state = initialState.data, payload = {}) => {
  switch (payload.type) {
    case 'FOO':
      return state;
    default:
      return state;
  }
}

const isLoading = (state = initialState.isLoading, payload = {}) => {
  switch (payload.type) {
    case 'FOO':
      return state;
    default:
      return state;
  }
};

export default combineReducers({
  data,
  isLoading,
})
