import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import setupStore from '~/../redux/store';

import './scss/index.scss';
import registerServiceWorker from './registerServiceWorker';

import App from '~components/App'; // eslint-disable-line import/first

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
