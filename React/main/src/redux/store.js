import { createStore, combineReducers } from 'redux';

import { turns } from './turns/reducer';
import { steps } from './steps/reducer';

const rootReducer = combineReducers({
  turns,
  steps
});

export default function setupStore(initialState) {
  return createStore(rootReducer, initialState);
}
