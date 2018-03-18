import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function saveApplication(state = initialState.inputs, action) {
  let newState;
  switch (action.type) {

    case types.SAVE_APPLICATION:
      newState = action.inputs;
      return newState;

    default:
      return state;
  }
}
