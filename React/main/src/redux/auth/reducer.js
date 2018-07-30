import { actions } from './actions';

const initialState = {
  error: null,
  isLoggingIn: true,
  loggedIn: false,
  token: null
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case actions.SET_LOGGING_IN:
      return {
        ...state,
        isLoggingIn: action.payload
      };
    case actions.SET_ERROR:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
      };
    case actions.LOG_IN:
      return {
        ...state,
        error: null,
        isLoggingIn: false,
        loggedIn: true,
        token: action.payload
      };
    case actions.LOG_OUT:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
