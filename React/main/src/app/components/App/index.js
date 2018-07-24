import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Game from '~screens/Game';

import setupStore from '~/../redux/store';

import UsersService from '../../../services/UsersService';

const store = setupStore();

class App extends Component {
  async componentDidMount() {
    console.log(await UsersService.getUser(1));
  }

  render() {
    return (
      <Provider store={store}>
        <Game />
      </Provider>
    );
  }
}

export default App;
