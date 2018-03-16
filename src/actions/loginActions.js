import * as types from './actionTypes';

export function setClearance(clearance) {
  return {
    type: types.SET_CLEARANCE,
    clearance
  }
}
