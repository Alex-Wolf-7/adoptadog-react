import initialState from './initialState.js';
import * as types from '../actions/actionTypes';

export default function saveChecklist(state = initialState.statuses, action) {
  let newState;
  switch (action.type) {

    case types.SAVE_CHECKLIST:
      newState = action.statuses;
      return newState;

    case types.CHANGE_APPLICATION_STATUS:
      newState = {
        applicationStatus: action.statuses.applicationStatus,
        discussStatus: state.discussStatus,
        homeCheckStatus: state.homeCheckStatus,
        finalStatus: state.finalStatus,
      }

      return newState;

    case types.CHANGE_DISCUSS_STATUS:
      newState = {
        applicationStatus: state.applicationStatus,
        discussStatus: action.statuses.discussStatus,
        homeCheckStatus: state.homeCheckStatus,
        finalStatus: state.finalStatus,
      }
      return newState;

    case types.CHANGE_HOMECHECK_STATUS:
      newState = {
        applicationStatus: state.applicationStatus,
        discussStatus: state.discussStatus,
        homeCheckStatus: action.statuses.homeCheckStatus,
        finalStatus: state.finalStatus,
      }
      return newState;

    case types.CHANGE_FINAL_STATUS:
      newState = {
        applicationStatus: state.applicationStatus,
        discussStatus: state.discussStatus,
        homeCheckStatus: state.homeCheckStatus,
        finalStatus: action.statuses.finalStatus,
      }
      return newState;

    default:
      return state;
  }
}
