export const LOAD_DATA = 'load_data';
export const ADD_DATA = 'add_data';


export function loadData() {
  return {
    type: LOAD_DATA
  };
}

export function addData(fields) {
  return {
    type: ADD_DATA,
    state: {
      fields
    }
  };
}
