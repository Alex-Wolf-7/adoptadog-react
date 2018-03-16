import initialState from './initialState';
import {SET_CLEARANCE} from '../actions/actionTypes';

export default function setClearance(state = initialState.clearance, action) {
  let newState;
  console.log("STATE IS: " + initialState.clearance);
  switch (action.type) {

    case SET_CLEARANCE:
      return action.clearance;

    default:
      return state;
  }
}
