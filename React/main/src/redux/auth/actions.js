import { createTypes } from 'redux-create-types';

import AuthService from '../../services/AuthService';

export const actions = createTypes(['SET_LOGGING_IN', 'LOG_IN', 'LOG_OUT'], '@@AUTH');

const actionCreators = {
  logIn: credentials => async dispatch => {
    dispatch({ type: actions.SET_LOGGING_IN });
    const response = await AuthService.logIn(credentials);
    if (response.ok) {
      console.log(response.data);
      // dispatch({
      //   type: actions.LOG_IN,
      //   payload: response.data
      // });
    } else {
      dispatch({
        type: actions.GET_WINNING_MOVES_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionCreators;
