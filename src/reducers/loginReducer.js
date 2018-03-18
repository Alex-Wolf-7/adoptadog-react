import initialState from './initialState';
import {SET_CLEARANCE} from '../actions/actionTypes';

export default function setClearance(state = initialState.clearance, action) {
  let newState;
  switch (action.type) {

    case SET_CLEARANCE:
      newState = action.clearance;
      return newState;

    default:
      return state;
  }
}
