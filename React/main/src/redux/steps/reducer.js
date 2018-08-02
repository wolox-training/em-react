import Immutable from 'seamless-immutable';
import { createReducer } from 'redux-recompose';

const initialState = Immutable({
  stepNumber: 0
});

const addStep = (state, action) => state.merge({ [action.target]: action.payload });

const reducerDescription = {
  ADD_STEP: addStep
};

export const steps = createReducer(initialState, reducerDescription);
