import WinningMovesService from '../../services/WinningMovesService';

// export const actions = createTypes([
//   'GET_WINNING_MOVES',
//   'GET_WINNING_MOVES_SUCCESS',
//   'GET_WINNING_MOVES_FAILURE'
// ]);

const actions = {
  GET_WINNING_MOVES: 'GET_WINNING_MOVES',
  GET_WINNING_MOVES_SUCCESS: 'GET_WINNING_MOVES_SUCCESS',
  GET_WINNING_MOVES_FAILURE: 'GET_WINNING_MOVES_FAILURE'
};

const actionCreators = {
  getWinningMoves: () => async dispatch => {
    dispatch({ type: actions.GET_WINNING_MOVES });
    const response = await WinningMovesService.getWinningMoves();
    if (response.ok) {
      dispatch({
        type: actions.GET_WINNING_MOVES_SUCCESS,
        payload: response.data
      });
    } else {
      dispatch({
        type: actions.GET_WINNING_MOVES_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionCreators;
