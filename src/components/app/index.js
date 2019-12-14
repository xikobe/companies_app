import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Categories from '../categories';
import List from '../list';
import Search from '../search';
import { fetchApps } from '../../store/apps-list/actions';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchApps());
  });

  return (
    <main>
      <Categories />
      <div>
        <Search />
        <List />
      </div>
    </main>
  );
}

export default App;
