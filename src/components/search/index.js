import React from 'react';
import useSearch from './useSearch';
import { Input } from './styles';

const Search = () => {
  const [value, onChange] = useSearch();

  return (
    <Input placeholder="Search by App" value={value} onChange={onChange} />
  );
};

export default Search;
