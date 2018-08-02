import { createTypes } from 'redux-create-types';

import AuthService from '../../services/AuthService';
import userActions from '../users/actions';

export const actions = createTypes(['SET_LOGGING_IN', 'SET_ERROR', 'LOG_IN', 'LOG_OUT'], '@@AUTH');

const actionCreators = {
  checkLoginStatus: () => dispatch => {
    const lsToken = localStorage.getItem('userData');
    if (lsToken) {
      dispatch({
        type: actions.LOG_IN,
        payload: lsToken
      });
      dispatch(userActions.getUserData());
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
        const userID = response.data[0].userID;
        localStorage.setItem('auth', JSON.stringify({ token, userID }));
        dispatch({
          type: actions.LOG_IN,
          payload: token
        });
        dispatch(userActions.getUserData());
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
