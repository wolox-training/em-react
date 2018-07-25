import React from 'react';
import { Provider } from 'react-redux';

import setupStore from '~/../redux/store';

// import Game from '~screens/Game';
import Login from '../../screens/Login';

const store = setupStore();

function App() {
  return (
    <Provider store={store}>
      <Login />
      {/* <Game /> */}
    </Provider>
  );
}

export default App;
