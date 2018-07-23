import { createStore, combineReducers } from 'redux';

import { xIsNext } from './turns/reducer';

const rootReducer = combineReducers({
  turns: xIsNext
});

export default function setupStore(initialState) {
  return createStore(rootReducer, initialState);
}
