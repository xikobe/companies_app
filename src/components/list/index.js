import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from './list-item';
import { Wrapper } from './styles';
import { selectAppsIds } from '../../store/apps-list/selectors';

const List = () => {
  const appsList = useSelector(selectAppsIds);

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
