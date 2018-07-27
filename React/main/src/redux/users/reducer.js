import { actions } from './actions';

const initialState = {
  name: null,
  user: null,
  password: null,
  icon: null
};

export function user(state = initialState, action) {
  switch (action.type) {
    case actions.SET_USER_DATA:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
