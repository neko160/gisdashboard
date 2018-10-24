import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import configureStore from './redux/store';
//redux
import { Provider } from 'react-redux';
const store = configureStore();
const rootEl = document.getElementById('app');



ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>, rootEl)

