import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectAppsIds, selectAppsByCategory } from '../../store/apps-list/selectors';
import { useCategoriesContext } from '../../contexts/categoriesContext';

const useAppsList = () => {
  const rawList = useSelector(selectAppsIds);
  const appsByCategory = useSelector(selectAppsByCategory);
  const [appsList, setAppsList] = useState();
  const { activeCategories } = useCategoriesContext();

  useEffect(() => {
    setAppsList(rawList);
  }, [rawList]);

  useEffect(() => {
    if (activeCategories.length) {
      const newAppList = activeCategories.reduce((result, category) => [...result, ...appsByCategory[category]], []);
      setAppsList(newAppList);
    }

    // effect clean up -> show all if no active category
    return () => setAppsList(rawList);
  }, [activeCategories]);

  return appsList;
};

export default useAppsList;
