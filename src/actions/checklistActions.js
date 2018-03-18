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

export function changeApplicationStatus(applicationStatus) {
  return {
    type: types.CHANGE_APPLICATION_STATUS,
    statuses: {
      applicationStatus: applicationStatus,
    }
  }
}

export function changeDiscussStatus(discussStatus) {
  return {
    type: types.CHANGE_DISCUSS_STATUS,
    statuses: {
      discussStatus: discussStatus,
    }
  }
}

export function changeHomeCheckStatus(homeCheckStatus) {
  return {
    type: types.CHANGE_HOMECHECK_STATUS,
    statuses: {
      homeCheckStatus: homeCheckStatus,
    }
  }
}

export function changeFinalStatus(finalStatus) {
  return {
    type: types.CHANGE_FINAL_STATUS,
    statuses: {
      finalStatus: finalStatus,
    }
  }
}
