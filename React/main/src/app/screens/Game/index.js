import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Board from '~components/Board';

import { STRINGS } from '~/../global/constants';

import { calculateWinner, timeout } from '~/../global/utils';

import { toggleXIsNext } from '~/../redux/turns/actions';

import { addStep } from '~/../redux/steps/actions';

import movesActions from '~/../redux/moves/actions';

import LoadingPage from '~components/LoadingPage';

import style from './styles.scss';


class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ]
  };

  async componentDidMount() {
    await timeout(1000); // Simulates delay
    await this.props.getWinningMoves();
  }

  getMovesHistory = () =>
    this.state.history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

  retryConnection = async () => {
    await this.props.getWinningMoves();
  }

  handleClick = i => {
    const { winningMoves, userData } = this.props;
    const history = this.state.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const icon = userData.icon || STRINGS.X;

    if (calculateWinner(squares, winningMoves)) return;

    squares[i] = this.props.xIsNext ? icon : STRINGS.O;

    this.props.toggleXIsNext(!this.props.xIsNext);
    this.props.addStep(history.length);

    this.setState({
      history: history.concat([
        {
          squares
        }
      ])
    });
  };

  jumpTo = step => {
    this.props.toggleXIsNext(step % 2 === 0);
    this.props.addStep(step);
  };

  render() {
    const { history } = this.state;
    const { stepNumber, winningMoves, winningMovesError, userData } = this.props;

    const current = history[stepNumber] || history[0];
    const moves = this.getMovesHistory();
    const winner = calculateWinner(current.squares, winningMoves);
    const icon = userData.icon || STRINGS.X;
    const status = winner
      ? `Da winner is: ${winner}`
      : `Next player: ${this.props.xIsNext ? icon : STRINGS.O}`;

    const BoardHandler = LoadingPage(
      <div className={style.game}>
        <div className={style['game-board']}>
          <Board squares={current.squares} onClick={this.handleClick} />
        </div>
        <div className={style['game-info']}>
          <div className={style['info-next']}>{status}</div>
          <ol className={style['info-moves']}>{moves}</ol>
        </div>
      </div>
    );

    return (
      <BoardHandler loaded={!!winningMoves.length} error={winningMovesError} onError={this.retryConnection} />
    );
  }
}

const mapStateToProps = state => ({
  xIsNext: state.turns.xIsNext,
  stepNumber: state.steps.stepNumber,
  winningMovesError: state.winningMoves.winningMovesError,
  winningMoves: state.winningMoves.winningMoves,
  userData: state.user.userData
});

const mapDispatchToProps = dispatch => ({
  toggleXIsNext: xIsNext => dispatch(toggleXIsNext(xIsNext)),
  addStep: step => dispatch(addStep(step)),
  getWinningMoves: () => dispatch(movesActions.getWinningMoves())
});

Game.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  toggleXIsNext: PropTypes.func.isRequired,
  stepNumber: PropTypes.number.isRequired,
  addStep: PropTypes.func.isRequired,
  getWinningMoves: PropTypes.func.isRequired,
  winningMovesError: PropTypes.bool,
  winningMoves: PropTypes.arrayOf(PropTypes.any),
  userData: PropTypes.objectOf(PropTypes.any)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
