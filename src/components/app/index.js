import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from '../categories';
import List from '../list';
import Search from '../search';
import { fetchApps } from '../../store/apps-list/actions';
import { Wrapper, ListWrapper } from './styles';
import CategoriesProvider from '../../contexts/categoriesContext';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApps());
  }, []);

  return (
    <Wrapper>
      <CategoriesProvider>
        <Categories />
        <ListWrapper>
          <Search />
          <List />
        </ListWrapper>
      </CategoriesProvider>
    </Wrapper>
  );
}

export default App;
