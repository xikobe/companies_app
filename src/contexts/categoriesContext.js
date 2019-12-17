import React, {
  createContext, useContext, useState, useCallback,
} from 'react';
import PropTypes from 'prop-types';

const CategoriesContext = createContext();

export const useCategoriesContext = () => useContext(CategoriesContext);

const CategoriesProvider = ({ children }) => {
  const [activeCategories, setActiveCategories] = useState([]);

  const toggleActiveCategory = useCallback((category) => {
    if (activeCategories.includes(category)) {
      return setActiveCategories(activeCategories.filter((cat) => cat !== category));
    }

    return setActiveCategories([...activeCategories, category]);
  }, [activeCategories]);

  const isCategoryActive = useCallback((category) => activeCategories.includes(category), [activeCategories]);

  const clearCategories = () => setActiveCategories([]);

  return (
    <CategoriesContext.Provider value={{
      toggleActiveCategory, isCategoryActive, activeCategories, clearCategories,
    }}
    >
      { children }
    </CategoriesContext.Provider>
  );
};

CategoriesProvider.propTypes = {
  children: PropTypes.node,
};

export default CategoriesProvider;
