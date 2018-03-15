import * as types from './actionTypes';

export function sendMessage(msg, user) {
  return {
    type: types.SEND_MESSAGE,
    msg,
    user
  }
}

export function loadLogs(logs) {
  return {
    type: types.LOAD_LOGS,
    logs
  }
}
