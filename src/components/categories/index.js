import React from 'react';
import { useSelector } from 'react-redux';
import { selectAppsCategories } from '../../store/apps-list/selectors';

const Categories = () => {
  const categories = useSelector(selectAppsCategories);

  console.log(categories);

  return (
    <p>Categories</p>
  );
};

export default Categories;
