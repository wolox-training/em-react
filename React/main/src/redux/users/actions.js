import { createTypes } from 'redux-create-types';

export const actions = createTypes(['SET_USER_DATA', 'GET_USER_DATA'], '@@USER');

export const setUserData = user => {
  localStorage.setItem('userData', JSON.stringify(user));
  return {
    type: actions.SET_USER_DATA,
    user
  };
};

export const getUserData = () => {
  const userData = localStorage.getItem('userData');
  return {
    type: actions.SET_USER_DATA,
    userData
  };
};
