import { createReducer } from 'redux-recompose';

const initialState = {
  xIsNext: true
};

const changeTurn = (state, action) => ({ ...state, [action.target]: action.payload });

const reducerDescription = {
  CHANGE_TURN: changeTurn
};

export const turns = createReducer(initialState, reducerDescription);
