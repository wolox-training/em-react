const initialState = {
  error: null,
  isLoggingIn: false,
  loggedIn: false,
  token: null
};

export function auth(state = initialState, action) {
  switch (action.type) {
    case '@@AUTH.SET_LOGGING_IN':
      return {
        ...state,
        isLoggingIn: true
      };
    case '@@AUTH.LOG_IN':
      return {
        ...state,
        error: null,
        isLoggingIn: false,
        loggedIn: true,
        token: action.payload
      };
    case '@@AUTH.LOG_OUT':
      return {
        ...state,
        error: null,
        isLoggingIn: false,
        loggedIn: false,
        token: null
      };
    default:
      return state;
  }
}
