import React from 'react';
import PropTypes from 'prop-types';
import { useCategoriesContext } from '../../../contexts/categoriesContext';
import { Item } from './styles';

const CategoryItem = ({ name }) => {
  const { toggleActiveCategory, isCategoryActive } = useCategoriesContext();

  const handleOnClick = () => {
    toggleActiveCategory(name);
  };

  return (
    <li>
      <Item onClick={handleOnClick} isActive={isCategoryActive(name)}>{ name }</Item>
    </li>
  );
};

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryItem;
