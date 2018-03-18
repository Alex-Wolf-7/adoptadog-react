import reducer from '../reducers/homeVisitReducer'
import * as types from '../actions/ActionTypes'
 
describe('homeVisit reducer', () => {
  it('should return the initial state', () => {
    expect(reducer({
      date: "",
      time: "",
      comments: "",
    }, {})).toEqual(
      {
        date: "",
        time: "",
        comments: "",
      }
    )
  })

  it('should save all homeVisit details', () => {
    expect(reducer([], {
      type: types.SAVE_HOMEVISIT,
      homeVisit: {
        date: "Date",
        time: "Time",
        comments: "Comments",
      },
    })).toEqual(
      {
        date: "Date",
        time: "Time",
        comments: "Comments",
      },
    )
  })
});
