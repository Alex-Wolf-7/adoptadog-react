import initialState from './initialState';
import {INIT_STATUSES} from '../actions/actionTypes';

export default function setInitialStatuses(state = initialState.statuses, action) {
  switch (action.type) {

    case INIT_STATUSES:
      return {
        appStatus: 'Not Complete',
        discussStatus: 'Not Complete',
        homeCheckStatus: 'Not Complete',
        finalStatus: 'Not Complete'
      };

    default:
      return state;
  }
}
