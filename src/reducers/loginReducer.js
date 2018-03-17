import initialState from './initialState';
import {SET_CLEARANCE} from '../actions/actionTypes';

export default function setClearance(state = initialState.clearance, action) {
  let newState;
  switch (action.type) {

    case SET_CLEARANCE:
      return action.clearance;

    default:
      return state;
  }
}
