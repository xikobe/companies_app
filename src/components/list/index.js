import React from 'react';
import ListItem from './list-item';
import Pagination from './pagination';
import { Wrapper } from './styles';
import useAppsList from './useAppsList';
import usePagination from './usePagination';

const List = () => {
  const [appsList, isLoaded] = useAppsList();
  const {
    paginatedList, setCurrentPage, pageNumbers, currentPage,
  } = usePagination(appsList);

  if (!appsList.length) {
    return (
      <Wrapper>
        { isLoaded ? 'No results...' : 'Loading...' }
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {
        paginatedList.map((id) => <ListItem key={id} id={id} />)
      }
      <Pagination pages={pageNumbers} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </Wrapper>
  );
};

export default List;
