import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'emotion-theming';
import { Global } from '@emotion/core';
import App from './components/app';
import { theme, globalStyles } from './utils/theme';
import * as serviceWorker from './serviceWorker';
import createStore from './store';

const store = createStore();

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>, document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
