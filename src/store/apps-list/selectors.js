import get from 'lodash/get';

export const selectAppsList = (state) => state.appsList;

export const selectAppsListData = (state) => get(selectAppsList(state), 'data', {});
export const selectAppsIds = (state) => selectAppsListData(state).ids;
export const selectAppsObject = (state) => selectAppsListData(state).apps;
export const selectAppById = (state, id) => selectAppsObject(state)[id];

export const selectAppsListIsLoading = (state) => get(selectAppsList(state), 'isLoading');

export const selectAppsListIsError = (state) => get(selectAppsList(state), 'error');

export const selectAppsCategories = (state) => get(selectAppsList(state), 'categories');
export const selectAppsCategoriesList = (state) => get(selectAppsCategories(state), 'list', []);
