import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ price }) => {
  if (!price) {
    return <h3>Free</h3>;
  }

  return (
    <h3>
      {Number(price / 100).toFixed(2)}
      <sup>€</sup>
    </h3>
  );
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
};

export default Price;
