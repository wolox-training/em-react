import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Game from '~screens/Game';

import setupStore from '~/../redux/store';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
