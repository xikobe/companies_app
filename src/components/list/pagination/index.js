import React from 'react';
import PropTypes from 'prop-types';
import {
  PagesWrapper, PageItem, PrevButton, NextButton,
} from './styles';

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  if (pages.length <= 1) {
    return null;
  }

  const handlePrevClick = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleNextClick = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <PagesWrapper>
      { currentPage > 1 && <li><PrevButton onClick={handlePrevClick} /></li> }
      {
        pages.map((page) => (
          <li key={page}>
            <PageItem onClick={() => setCurrentPage(page)} isActive={page === currentPage}>
              { page }
            </PageItem>
          </li>
        ))
      }
      {(currentPage < pages.length) && <li><NextButton onClick={handleNextClick} /></li>}
    </PagesWrapper>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  pages: PropTypes.arrayOf(PropTypes.number),
};

export default Pagination;
