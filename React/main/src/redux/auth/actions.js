import { createTypes } from 'redux-create-types';

import AuthService from '../../services/AuthService';

export const actions = createTypes(['SET_LOGGING_IN', 'LOG_IN', 'LOG_OUT'], '@@AUTH');

const actionCreators = {
  logIn: credentials => async dispatch => {
    dispatch({ type: actions.SET_LOGGING_IN, payload: true });
    const response = await AuthService.logIn(credentials);
    if (response.ok) {
      const token = response.data[0] && response.data[0].token ? response.data[0].token : null;
      if (!token) {
        dispatch({
          type: actions.SET_LOGGING_IN,
          payload: false
        });
      } else {
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
