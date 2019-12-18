import React, { useEffect, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { fetchApps } from '../../store/apps-list/actions';
import { Wrapper, ListWrapper } from './styles';
import CategoriesProvider from '../../contexts/categoriesContext';

/* eslint-disable */
const LazyCategories = React.lazy(() => import(/* webpackChunkName: "categories" */'../categories'));
const LazySearch = React.lazy(() => import(/* webpackChunkName: "search" */'../search'));
const LazyAppsList = React.lazy(() => import(/* webpackChunkName: "list" */'../list'));
/* eslint-enable */

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApps());
  });

  return (
    <Wrapper>
      <CategoriesProvider>
        <Suspense fallback={null}>
          <LazyCategories />
        </Suspense>
        <ListWrapper>
          <Suspense fallback={null}>
            <LazySearch />
          </Suspense>
          <Suspense fallback={null}>
            <LazyAppsList />
          </Suspense>
        </ListWrapper>
      </CategoriesProvider>
    </Wrapper>
  );
}

export default App;
