import Immutable from 'seamless-immutable';
import { createReducer, onReadValue } from 'redux-recompose';

const initialState = Immutable({
  xIsNext: true
});

const reducerDescription = {
  CHANGE_TURN: onReadValue()
};

export const turns = createReducer(initialState, reducerDescription);
