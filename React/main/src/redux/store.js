import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { turns } from './turns/reducer';
import { steps } from './steps/reducer';
import { winningMoves } from './moves/reducer';

const rootReducer = combineReducers({
  turns,
  steps,
  winningMoves
});

export default function setupStore() {
  return createStore(rootReducer, applyMiddleware(thunk));
}
