import reducer from '../reducers/chatReducer'
import * as types from '../actions/ActionTypes'
 
describe('chat reducer', () => {
  it('should return the initial state', () => {
    expect(reducer([], {})).toEqual(
        []
    )
  })

  it('should add another message to the state', () => {
    expect(reducer([], {
      type: types.SEND_MESSAGE,
      msg: "test",
      user: "Ryan"
    })).toEqual(
        [{sender: "Ryan", message: "test"}]
    )
  })

  it('should should load logs from a nonempty state of 1', () => {
    expect(reducer([], {
      type: types.LOAD_LOGS,
      logs: [{sender: "Ryan", message: "Hello"}]
    })).toEqual(
        [{sender: "Ryan", message: "Hello"}]
    )
  })

  it('should should load logs from a nonempty state greater than 1', () => {
    expect(reducer([], {
      type: types.LOAD_LOGS,
      logs: [{sender: "Ryan", message: "Hello"}, {sender: "Ryan2", message: "Hello2"}, {sender: "Ryan3", message: "Hello3"}]
    })).toEqual(
        [{sender: "Ryan", message: "Hello"}, {sender: "Ryan2", message: "Hello2"}, {sender: "Ryan3", message: "Hello3"}]
    )
  })

  it('should not load logs from an empty state', () => {
    expect(reducer([], {
      type: types.LOAD_LOGS,
      logs: []
    })).toEqual(
        []
    )
  })
});
