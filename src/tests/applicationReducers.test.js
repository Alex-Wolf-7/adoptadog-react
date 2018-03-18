import reducer from '../reducers/applicationReducer'
import * as types from '../actions/ActionTypes'
 
describe('application reducer', () => {
  it('should return the initial state', () => {
    expect(reducer({
      name: "",
      address: "",
      housing: "",
      myEmail: "",
      phone: "",
      vetName: "",
      vetEmail: "",
      vetPhone: "",
      dogName: "",
      currPets: "",
      dailySchedule: ""
    }, {})).toEqual({
      name: "",
      address: "",
      housing: "",
      myEmail: "",
      phone: "",
      vetName: "",
      vetEmail: "",
      vetPhone: "",
      dogName: "",
      currPets: "",
      dailySchedule: ""
    })
  })

  it('should change all inputs', () => {
    expect(reducer([], {
      type: types.SAVE_APPLICATION,
      inputs: {
        name: "Alex",
        address: "heelo",
        housing: "apartment",
        myEmail: "sjhk",
        phone: "123",
        vetName: "sdf",
        vetEmail: "fds",
        vetPhone: "dfg",
        dogName: "sdf",
        currPets: "gf",
        dailySchedule: "ggaadfdf"
      }
    })).toEqual(
      {
        name: "Alex",
        address: "heelo",
        housing: "apartment",
        myEmail: "sjhk",
        phone: "123",
        vetName: "sdf",
        vetEmail: "fds",
        vetPhone: "dfg",
        dogName: "sdf",
        currPets: "gf",
        dailySchedule: "ggaadfdf"
      },
    )
  })
})
