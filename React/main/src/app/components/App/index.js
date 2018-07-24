import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Game from '~screens/Game';

import setupStore from '~/../redux/store';

import WinningMovesService from '../../../services/WinningMovesService';

const store = setupStore();

class App extends Component {
  state = {
    moves: []
  };

  async componentWillMount() {
    const res = await WinningMovesService.getWinningMoves();
    if (res.data.length) this.setState({ moves: res.data });
  }

  render() {
    const { moves } = this.state;
    return (
      <Provider store={store}>
        <Game winningMoves={moves} />
      </Provider>
    );
  }
}

export default App;
