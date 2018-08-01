import { actions } from './actions';

const initialState = {
  userData: {
    id: null,
    name: null,
    user: null,
    password: null,
    icon: null
  },
  userDataLoading: false,
  userDataError: false
};

export function user(state = initialState, action) {
  switch (action.type) {
    case actions.GET_USER_DATA_SUCCESS:
      return {
        ...state,
        userDataLoading: false,
        userData: {
          ...action.payload
        }
      };
    case actions.GET_USER_DATA_LOADING:
      return {
        ...state,
        userDataLoading: true
      };
    case actions.GET_USER_DATA_FAILURE:
      return {
        ...state,
        userDataLoading: false,
        userDataError: action.payload
      };
    default:
      return state;
  }
}
