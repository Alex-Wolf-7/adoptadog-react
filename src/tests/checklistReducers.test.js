import reducer from '../reducers/checklistReducer'
import * as types from '../actions/ActionTypes'
 
describe('checklist reducer', () => {
  it('should return the initial state', () => {
    expect(reducer([], {})).toEqual(
      statuses: {
        applicationStatus: "Not Complete",
        discussStatus: "Not Complete",
        homeCheckStatus: "Not Complete",
        finalStatus: "Not Complete",
      }
    )
  })

  it('should change all statuses', () => {
    expect(reducer([], {
      type: types.SAVE_CHECKLIST,
      statuses: {
        applicationStatus: "GTG",
        discussStatus: "Nop",
        homeCheckStatus: "I wish",
        finalStatus: "Not even my final status",
      },
    })).toEqual(
      statuses: {
        applicationStatus: "GTG",
        discussStatus: "Nop",
        homeCheckStatus: "I wish",
        finalStatus: "Not even my final status",
      },
    )
  })
});
