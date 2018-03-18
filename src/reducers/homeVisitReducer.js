import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function homeVisit(state = initialState.homeVisit, action) {
  let newState;
  switch (action.type) {

    case types.SAVE_HOMEVISIT:
      newState = action.homeVisit;
      return newState;

    default:
      return state;
  }
}
