import { createReducer, onSetValue } from 'redux-recompose';

import { actions } from './actions';

const initialState = {
  error: null,
  isLoggingIn: true,
  loggedIn: false,
  token: null
};

const logIn = (state, action) => ({
  ...state,
  error: null,
  isLoggingIn: false,
  loggedIn: true,
  token: action.payload
});

const logOut = () => ({
  ...initialState,
  isLoggingIn: false
});

const setError = (state, action) => ({
  ...state,
  isLoggingIn: false,
  error: action.payload
});

const reducerDescription = {
  [actions.SET_LOGGING_IN]: () => onSetValue(true),
  [actions.LOG_IN]: logIn,
  [actions.LOG_OUT]: logOut,
  [actions.SET_ERROR]: setError
};

export const auth = createReducer(initialState, reducerDescription);
