import { createStore, combineReducers } from 'redux'
import example from './exampleSlice';

export const rootReducer = combineReducers({
  example,
});

export const defaultStore = createStore(rootReducer);
