import { createTypes } from 'redux-create-types';

import UserActions from '../../services/UsersService';

export const actions = createTypes(
  [
    'GET_USER_DATA',
    'GET_USER_DATA_LOADING',
    'GET_USER_DATA_SUCCESS',
    'GET_USER_DATA_FAILURE',
    'UPDATE_USER_DATA',
    'UPDATE_USER_DATA_LOADING',
    'UPDATE_USER_DATA_SUCCESS',
    'UPDATE_USER_DATA_FAILURE'
  ],
  '@@USER'
);

const actionCreators = {
  getUserData: () => async dispatch => {
    dispatch({ type: actions.GET_USER_DATA_LOADING, target: 'userData' });
    const lsData = localStorage.getItem('auth');

    try {
      const id = JSON.parse(lsData).userID;
      if (!id) throw new Error(`There's no token...`);

      const response = await UserActions.getUser(id);

      if (response.ok) {
        const user = response.data[0];
        localStorage.setItem('userData', JSON.stringify(user));
        dispatch({
          type: actions.GET_USER_DATA_SUCCESS,
          target: 'userData',
          payload: user
        });
      }
    } catch (err) {
      dispatch({
        type: actions.GET_USER_DATA_FAILURE,
        target: 'userData',
        payload: err || 'Something went wrong retrieving the user data.'
      });
    }
  },
  setUserData: data => async dispatch => {
    dispatch({ type: actions.UPDATE_USER_DATA_LOADING, target: 'updateUserData' });
    try {
      if (!data.id) throw new Error(`There's no ID for the user to be updated`);
      const response = await UserActions.updateUser(data.id, data);
      console.log(response);
    } catch (err) {
      dispatch({
        type: actions.UPDATE_USER_DATA_FAILURE,
        target: 'updateUserData',
        payload: err || 'Something went wrong updating the user data.'
      });
    }
  }
};

export default actionCreators;
