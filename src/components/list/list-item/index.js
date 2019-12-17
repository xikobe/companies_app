import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectAppById } from '../../../store/apps-list/selectors';
import {
  Wrapper, Info, Subscriptions, Category, Categories, Subscription,
} from './styles';

const ListItem = ({ id }) => {
  const app = useSelector((state) => selectAppById(state, id));

  return (
    <Wrapper>
      <Info>
        <div>
          <h1>{app.name}</h1>
          <p>{app.description}</p>
        </div>
        <Categories>
          { app.categories.map((category) => <Category key={`${category}_${id}`}>{ category }</Category>) }
        </Categories>
      </Info>
      <Subscriptions>
        {
          app.subscriptions.map((sub) => (
            <Subscription key={`${sub.name}_${id}`}>
              <p>{sub.name}</p>
              <h3>{ sub.price }</h3>
            </Subscription>
          ))
        }
      </Subscriptions>
    </Wrapper>
  );
};

ListItem.propTypes = {
  id: PropTypes.string,
};

export default ListItem;
