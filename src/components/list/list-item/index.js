import React from 'react';
import { useSelector } from 'react-redux';
import { selectAppById } from '../../../store/apps-list/selectors';
import {
  Wrapper, Info, Subscriptions, Category, Categories, Subscription,
} from './styles';

const ListItem = ({ id }) => {
  const app = useSelector((state) => selectAppById(state, id));

  console.log(app);

  return (
    <Wrapper>
      <Info>
        <div>
          <h1>{app.name}</h1>
          <p>{app.description}</p>
        </div>
        <Categories>
          { app.categories.map((category) => <Category>{ category }</Category>) }
        </Categories>
      </Info>
      <Subscriptions>
        {
          app.subscriptions.map((sub) => (
            <Subscription>
              <p>{sub.name}</p>
              <h3>{ sub.price }</h3>
            </Subscription>
          ))
        }
      </Subscriptions>
    </Wrapper>
  );
};

export default ListItem;
