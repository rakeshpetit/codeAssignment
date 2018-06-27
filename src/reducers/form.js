import { Record, List } from 'immutable';
import * as actions from '../actions/form';
import * as data from '../data/code-challenge.json';

export const State = Record({
  details: null,
  list: []
});

function setProductData(state) {
  return state.set('details', data.details)
    .set('list', data.list);
}

function addProductData(state, fields) {
  const details= state.get('details');
  const list= state.get('list');
  const key = list[list.length-1];
  let newProd = { ...details };
  newProd[key+1] = { ...fields };
  list.push(key+1);
  return state.set('details', newProd )
    .set('list', list);
}

export default function reducer(state = new State(), action) {
  switch (action.type) {
    case actions.LOAD_DATA:
      return setProductData(state);
    case actions.ADD_DATA:
      return addProductData(state, action.state.fields);
    default:
      return state;
  }
}
