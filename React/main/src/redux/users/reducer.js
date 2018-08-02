import Immutable from 'seamless-immutable';
import { createReducer, onSuccess, onLoading, onFailure } from 'redux-recompose';

import { actions } from './actions';

const initialState = Immutable({
  userData: {
    id: null,
    name: null,
    user: null,
    password: null,
    icon: null
  },
  userDataLoading: false,
  userDataError: false
});

const reducerDescription = {
  [actions.GET_USER_DATA]: onLoading(),
  [actions.GET_USER_DATA_SUCCESS]: onSuccess(),
  [actions.GET_USER_DATA_FAILURE]: onFailure()
};

export const user = createReducer(initialState, reducerDescription);
