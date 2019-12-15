import React from 'react';
import { useSelector } from 'react-redux';
import CategoryItem from './category-item';
import { Wrapper } from './styles';
import { selectAppsCategoriesList } from '../../store/apps-list/selectors';

const Categories = () => {
  const categories = useSelector(selectAppsCategoriesList);

  console.log(categories);

  return (
    <Wrapper>
      <h2>Categories</h2>
      <ul>
        {
          categories.map((category) => <CategoryItem name={category} />)
        }
      </ul>
    </Wrapper>
  );
};

export default Categories;
