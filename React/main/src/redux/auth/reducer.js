import Immutable from 'seamless-immutable';
import { createReducer, onLoading, onFailure } from 'redux-recompose';

import { actions } from './actions';

const initialState = Immutable({
  authLoading: true,
  authError: null,
  loggedIn: false,
  token: null
});

const logIn = (state, action) => ({
  ...state,
  authError: null,
  authLoading: false,
  loggedIn: true,
  token: action.payload
});

const logOut = () => ({
  ...initialState,
  authLoading: false
});

const reducerDescription = {
  [actions.SET_LOGGING_IN]: onLoading(),
  [actions.SET_ERROR]: onFailure(),
  [actions.LOG_IN]: logIn,
  [actions.LOG_OUT]: logOut
};

export const auth = createReducer(initialState, reducerDescription);
