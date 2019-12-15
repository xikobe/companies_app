import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './styles';

const CategoryItem = ({ name }) => (
  <li>
    <Item>{ name }</Item>
  </li>
);

CategoryItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CategoryItem;
