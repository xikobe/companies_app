import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectAppsIds, selectAppsByCategory, selectAppsObject, selectAppsListIsLoaded,
} from '../../store/apps-list/selectors';
import { selectSearchValue } from '../../store/search/selectors';
import { useCategoriesContext } from '../../contexts/categoriesContext';

const useAppsList = () => {
  const rawList = useSelector(selectAppsIds);
  const appsByCategory = useSelector(selectAppsByCategory);
  const isAppListLoaded = useSelector(selectAppsListIsLoaded);
  const searchValue = useSelector(selectSearchValue);
  const normalizedApps = useSelector(selectAppsObject);
  const [appsList, setAppsList] = useState([]);
  const { activeCategories, clearCategories } = useCategoriesContext();

  useEffect(() => {
    if (rawList) {
      setAppsList(rawList);
    }
  }, [rawList]);

  useEffect(() => {
    if (activeCategories.length) {
      const newAppList = activeCategories.reduce((result, category) => {
        if (appsByCategory[category].some((id) => result.includes(id))) {
          return result;
        }

        return [...result, ...appsByCategory[category]];
      }, []);
      setAppsList(newAppList);
    }

    // effect clean up -> show all if no active category
    return () => setAppsList(rawList);
  }, [activeCategories, activeCategories.length, appsByCategory, rawList]);

  useEffect(() => {
    if (searchValue) {
      if (activeCategories.length) {
        clearCategories();
      }

      const newAppList = rawList.filter((id) => normalizedApps[id].searchTerms.includes(searchValue.toLowerCase()));

      setAppsList(newAppList);
    }

    return () => setAppsList(rawList);
  }, [searchValue, activeCategories.length, clearCategories, normalizedApps, rawList]);

  return [appsList, isAppListLoaded];
};

export default useAppsList;
