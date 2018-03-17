import reducer from '../reducers/loginReducer'
import * as types from '../actions/ActionTypes'
 
describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
        ''
    )
  })

  it('should handle SET_CLEARANCE', () => {
    expect(
      reducer([""], {
        type: types.SET_CLEARANCE,
        clearance: "user"
      })
    ).toEqual(
      "user"
    )

    expect(
      reducer([""], {
          type: types.SET_CLEARANCE,
          clearance: 'admin'
        })
    ).toEqual(
        'admin'
    )
  })
})
