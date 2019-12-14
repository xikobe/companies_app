import get from 'lodash/get';
import { createSelector } from 'reselect';

export const selectAppsList = (state) => state.appsList;

export const selectAppsListData = (state) => get(selectAppsList(state), 'data');
export const selectAppsListIsLoading = (state) => get(selectAppsList(state), 'isLoading');
export const selectAppsListIsError = (state) => get(selectAppsList(state), 'error');

export const selectAppsCategories = createSelector(
  selectAppsListData,
  (data) => data.reduce((result, app) => [
    ...result,
    ...app.categories.filter((category) => !result.includes(category)),
  ], []),
);
