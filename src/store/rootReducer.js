import { combineReducers } from 'redux';
import appsListReducer from './apps-list/reducer';
import searchReducer from './search/reducer';

const rootReducer = combineReducers({
  appsList: appsListReducer,
  search: searchReducer,
});

export default rootReducer;
