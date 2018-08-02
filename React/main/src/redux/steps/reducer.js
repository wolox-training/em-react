import Immutable from 'seamless-immutable';
import { createReducer, onReadValue } from 'redux-recompose';

const initialState = Immutable({
  stepNumber: 0
});

const reducerDescription = {
  ADD_STEP: onReadValue()
};

export const steps = createReducer(initialState, reducerDescription);
