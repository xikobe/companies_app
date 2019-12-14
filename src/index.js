import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {theme, globalStyles} from './utils/theme';
import { ThemeProvider } from 'emotion-theming'
import * as serviceWorker from './serviceWorker';
import { Global } from '@emotion/core';

ReactDOM.render(
  <ThemeProvider theme={ theme }>
    <Global styles={ globalStyles } />
    <App />
  </ThemeProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
