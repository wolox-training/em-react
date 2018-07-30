import { createReducer, onLoading, onFailure, onSuccess } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  winningMoves: [],
  winningMovesError: null,
  winningMovesLoading: true
};

const reducerDescription = {
  [actions.GET_WINNING_MOVES]: onLoading(),
  [actions.GET_WINNING_MOVES_SUCCESS]: onSuccess(),
  [actions.GET_WINNING_MOVES_FAILURE]: onFailure()
};

export const winningMoves = createReducer(initialState, reducerDescription);
