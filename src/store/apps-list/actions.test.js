import axios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import MockAdapter from 'axios-mock-adapter';
import { fetchApps } from './actions';
import { FETCH_APPS_PENDING, FETCH_APPS_FULFILLED, FETCH_APPS_REJECTED } from './constants';

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchApps', () => {
  it('creates FETCH_APPS_FULFILLED when fetching apps is done', async () => {
    const store = mockStore(middlewares);

    mock.onGet('apps.json').reply(200, 'Foo');

    await store.dispatch(fetchApps());

    const expectedActions = [
      { type: FETCH_APPS_PENDING },
      { type: FETCH_APPS_FULFILLED, payload: 'Foo' },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates FETCH_APPS_REJECTED when fetching apps fails', async () => {
    const store = mockStore(middlewares);
    const mockError = new Error('Request failed with status code 500');

    mock.onGet('apps.json').reply(500);

    await store.dispatch(fetchApps());

    const expectedActions = [
      { type: FETCH_APPS_PENDING },
      { type: FETCH_APPS_REJECTED, payload: mockError },
    ];

    expect(store.getActions()).toEqual(expectedActions);
  });
});
