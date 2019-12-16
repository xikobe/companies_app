import React, {
  createContext, useContext, useState,
} from 'react';
import PropTypes from 'prop-types';

const CategoriesContext = createContext();

export const useCategoriesContext = () => useContext(CategoriesContext);

const CategoriesProvider = ({ children }) => {
  const [activeCategories, setActiveCategories] = useState([]);

  const toggleActiveCategory = (category) => {
    if (activeCategories.includes(category)) {
      return setActiveCategories(activeCategories.filter((cat) => cat !== category));
    }

    return setActiveCategories([...activeCategories, category]);
  };

  const isCategoryActive = (category) => activeCategories.includes(category);

  return (
    <CategoriesContext.Provider value={{ toggleActiveCategory, isCategoryActive }}>
      { children }
    </CategoriesContext.Provider>
  );
};

CategoriesProvider.propTypes = {
  children: PropTypes.node,
};

export default CategoriesProvider;
