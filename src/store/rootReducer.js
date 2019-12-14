import appsListReducer from './apps-list/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    appsList: appsListReducer,
});

export default rootReducer;
