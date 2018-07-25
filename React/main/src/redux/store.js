import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

import { turns } from './turns/reducer';
import { steps } from './steps/reducer';
import { winningMoves } from './moves/reducer';

const rootReducer = combineReducers({
  turns,
  steps,
  winningMoves,
  form: formReducer
});

export default function setupStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
