import { fetch_Data } from '../actions/index';

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case fetch_Data:
      return [action.payload.data[0], ...state];
  }

  return state;
}
