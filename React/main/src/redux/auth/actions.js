import { createTypes } from 'redux-create-types';

import AuthService from '../../services/AuthService';

export const actions = createTypes(['SET_LOGGING_IN', 'SET_ERROR', 'LOG_IN', 'LOG_OUT'], '@@AUTH');

const actionCreators = {
  checkLoginStatus: () => async dispatch => {
    const lsToken = localStorage.getItem('token');
    if (lsToken) {
      dispatch({
        type: actions.LOG_IN,
        payload: lsToken
      });
    }
  },
  logIn: credentials => async dispatch => {
    dispatch({ type: actions.SET_LOGGING_IN, payload: true });
    const response = await AuthService.logIn(credentials);
    if (response.ok) {
      const token = response.data[0] && response.data[0].token ? response.data[0].token : null;
      if (!token) {
        dispatch({
          type: actions.SET_ERROR,
          payload: 'Wrong username or password!'
        });
      } else {
        localStorage.setItem('token', token);
        dispatch({
          type: actions.LOG_IN,
          payload: token
        });
      }
    } else {
      dispatch({
        type: actions.SET_LOGGING_IN,
        payload: false
      });
    }
  }
};

export default actionCreators;
