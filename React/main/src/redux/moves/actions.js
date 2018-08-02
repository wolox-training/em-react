import { createTypes } from 'redux-create-types';

import WinningMovesService from '../../services/WinningMovesService';

export const actions = createTypes(
  ['GET_WINNING_MOVES', 'GET_WINNING_MOVES_SUCCESS', 'GET_WINNING_MOVES_FAILURE'],
  '@@WINNING_MOVES'
);

const actionCreators = {
  getWinningMoves: () => async dispatch => {
    dispatch({ type: actions.GET_WINNING_MOVES, target: 'winningMoves' });
    const response = await WinningMovesService.getWinningMoves();
    if (response.ok) {
      dispatch({
        type: actions.GET_WINNING_MOVES_SUCCESS,
        target: 'winningMoves',
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_WINNING_MOVES_FAILURE,
        target: 'winningMoves',
        payload: response.problem
      });
    }
  }
};

export default actionCreators;
