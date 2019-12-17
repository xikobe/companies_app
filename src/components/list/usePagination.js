import { useState } from 'react';

const usePagination = (appsList) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(3);

  const lastAppIndex = currentPage * itemsPerPage;
  const firstAppIndex = lastAppIndex - itemsPerPage;

  const paginatedList = appsList.slice(firstAppIndex, lastAppIndex);

  const pageNumbers = [...Array(Math.ceil(appsList.length / itemsPerPage))].map((_, i) => i + 1);

  return {
    paginatedList, setCurrentPage, pageNumbers, currentPage,
  };
};

export default usePagination;
