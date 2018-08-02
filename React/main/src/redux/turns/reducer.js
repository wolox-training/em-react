import Immutable from 'seamless-immutable';
import { createReducer } from 'redux-recompose';

const initialState = Immutable({
  xIsNext: true
});

const changeTurn = (state, action) => state.merge({ [action.target]: action.payload });

const reducerDescription = {
  CHANGE_TURN: changeTurn
};

export const turns = createReducer(initialState, reducerDescription);
