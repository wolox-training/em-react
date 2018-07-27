import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { auth } from './auth/reducer';
import { user } from './users/reducer';
import { turns } from './turns/reducer';
import { steps } from './steps/reducer';
import { winningMoves } from './moves/reducer';

const rootReducer = combineReducers({
  auth,
  user,
  turns,
  steps,
  winningMoves,
  form: formReducer
});

export default function setupStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
