import React from 'react';

import Board from '~components/Board';

import style from './styles.scss';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className={style['game-board']}>
          <Board />
        </div>
        <div className={style['game-info']}>
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
