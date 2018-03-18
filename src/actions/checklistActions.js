import * as types from './actionTypes';

export function saveChecklist(applicationStatus, discussStatus,
  homeCheckStatus, finalStatus) {
  return {
    type: types.SAVE_CHECKLIST,
    statuses: {
      applicationStatus: applicationStatus,
      discussStatus: discussStatus,
      homeCheckStatus: homeCheckStatus,
      finalStatus: finalStatus
    }
  }
}
