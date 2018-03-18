import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function saveChecklist(state = initialState.statuses, action) {
  let newState;
  switch (action.type) {

    case types.SAVE_CHECKLIST:
      newState = action.statuses;
      return newState;

    default:
      return state;
  }
}
