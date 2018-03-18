import * as types from './actionTypes';

export function saveApplication(name, address, housing, myEmail, phone,
vetName, vetEmail, vetPhone, dogName, currPets, dailySchedule) {
  return {
    type: types.SAVE_APPLICATION,
    inputs: {
      name: name,
      address: address,
      housing: housing,
      myEmail: myEmail,
      phone: phone,
      vetName: vetName,
      vetEmail: vetEmail,
      vetPhone: vetPhone,
      dogName: dogName,
      currPets: currPets,
      dailySchedule: dailySchedule
    }
  }
}
