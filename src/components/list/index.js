import React from 'react';
import ListItem from './list-item';
import { Wrapper } from './styles';
import useAppsList from './useAppsList';

const List = () => {
  const appsList = useAppsList();

  if (!appsList) {
    return <Wrapper>Loading...</Wrapper>;
  }

  return (
    <Wrapper>
      {
        appsList.map((id) => <ListItem key={id} id={id} />)
      }
    </Wrapper>
  );
};

export default List;
