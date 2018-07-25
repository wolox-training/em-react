import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Board from '~components/Board';

import { STRINGS } from '~/../global/constants';

import { calculateWinner } from '~/../global/utils';

import { toggleXIsNext } from '~/../redux/turns/actions';

import { addStep } from '~/../redux/steps/actions';

import movesActions from '~/../redux/moves/actions';

import style from './styles.scss';

class Game extends Component {
  state = {
    history: [
      {
        squares: Array(9).fill(null)
      }
    ]
  };

  async componentWillMount() {
    // console.log(this.props.winningMoves);
    await this.props.movesActions.getWinningMoves();
    // console.log(this.props.winningMoves);
  }

  getMovesHistory = () => {
    return this.state.history.map((step, move) => {
      const desc = move ? `Go to move #${move}` : `Go to game start`;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });
  };

  handleClick = i => {
    const { winningMoves } = this.props;
    const history = this.state.history.slice(0, this.props.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares, winningMoves.moves)) return;

    squares[i] = this.props.xIsNext ? STRINGS.X : STRINGS.O;

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
    const { stepNumber } = this.props;

    const current = history[stepNumber];
    const moves = this.getMovesHistory();
    const winner = calculateWinner(current.squares, this.props.winningMoves.moves);
    const status = winner
      ? `Winner: ${winner}`
      : `Next player: ${this.props.xIsNext ? STRINGS.X : STRINGS.O}`;

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
  xIsNext: state.turns.xIsNext,
  stepNumber: state.steps.stepNumber,
  winningMoves: state.winningMoves
});

const mapDispatchToProps = dispatch => ({
  toggleXIsNext: xIsNext => dispatch(toggleXIsNext(xIsNext)),
  addStep: step => dispatch(addStep(step)),
  movesActions: bindActionCreators(movesActions, dispatch)
});

Game.propTypes = {
  xIsNext: PropTypes.bool.isRequired,
  toggleXIsNext: PropTypes.func.isRequired,
  stepNumber: PropTypes.number.isRequired,
  addStep: PropTypes.func.isRequired,
  movesActions: PropTypes.objectOf(PropTypes.any),
  winningMoves: PropTypes.objectOf(PropTypes.any)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
