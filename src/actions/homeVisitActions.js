import * as types from './actionTypes';

export function saveHomeVisit(date, time, comments, done) {
  return {
    type: types.SAVE_HOMEVISIT,
    homeVisit: {
      date: date,
      time: time,
      comments: comments,
    }
  }
}
