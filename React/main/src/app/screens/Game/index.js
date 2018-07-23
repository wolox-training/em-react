import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Board from '~components/Board';

import { calculateWinner } from '~/../utils';

import { toggleXIsNext } from '~/../redux/turns/actions';

import style from './styles.scss';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ],
    stepNumber: 0
  };

  handleClick = i => {
    this.props.toggleXIsNext(!this.props.xIsNext);

    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares || squares[i])) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([
        {
          squares
        }
      ]),
      stepNumber: history.length
    });
  };

  jumpTo = step => {
    this.setState({
      stepNumber: step
      // xIsNext: step % 2 === 0
    });
  };

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;
    }

    return (
      <div className="game">
        <div className={style['game-board']}>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={style['game-info']}>
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  xIsNext: state.xIsNext
});

const mapDispatchToProps = dispatch => ({
  toggleXIsNext: xIsNext => dispatch(toggleXIsNext(xIsNext))
});

Game.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  toggleXIsNext: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
