import * as types from '../actions/actionTypes';

export default function viewApplication(state, action) {
  let newState;
  switch (action.type) {

    case types.VIEW_APPLICATION:
      return newState;

    default:
      return state;
  }
}
