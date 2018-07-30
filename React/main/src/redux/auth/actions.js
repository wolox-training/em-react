import { createTypes } from 'redux-create-types';

import AuthService from '../../services/AuthService';
import { actions as userActions } from '../users/actions';

export const actions = createTypes(['SET_LOGGING_IN', 'SET_ERROR', 'LOG_IN', 'LOG_OUT'], '@@AUTH');

const actionCreators = {
  checkLoginStatus: () => dispatch => {
    const lsToken = localStorage.getItem('token');
    const userData = localStorage.getItem('userData');
    if (lsToken) {
      dispatch({
        type: userActions.SET_USER_DATA,
        payload: JSON.parse(userData)
      });
      dispatch({
        type: actions.LOG_IN,
        payload: lsToken
      });
    } else {
      dispatch({
        type: actions.LOG_OUT
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
        localStorage.setItem('userData', JSON.stringify(response.data[0]));
        dispatch({
          type: actions.LOG_IN,
          payload: token
        });
        dispatch({
          type: userActions.SET_USER_DATA,
          payload: response.data[0]
        });
      }
    } else {
      dispatch({
        type: actions.SET_LOGGING_IN,
        payload: false
      });
    }
  },
  logOut: () => async dispatch => {
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    dispatch({ type: actions.LOG_OUT });
  }
};

export default actionCreators;
