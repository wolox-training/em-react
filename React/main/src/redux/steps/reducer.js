import { createReducer } from 'redux-recompose';

const initialState = {
  stepNumber: 0
};

const addStep = (state, action) => ({ ...state, [action.target]: action.payload });

const reducerDescription = {
  ADD_STEP: addStep
};

export const steps = createReducer(initialState, reducerDescription);
