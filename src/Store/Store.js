import { createStore, combineReducers } from 'redux';
import allReducers from '.././reducers';

const reducers = combineReducers({
  allReducers
});

const store = createStore(reducers);

export default store;
