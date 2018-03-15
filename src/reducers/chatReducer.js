import initialState from './initialState';
import {SEND_MESSAGE, LOAD_LOGS} from '../actions/actionTypes';

export default function chat(state = initialState.chatLog, action) {
  let newState;
  switch (action.type) {

    case SEND_MESSAGE:

      newState = state.concat({message:action.msg, sender:action.user});
      return newState;

    case LOAD_LOGS:
      newState = [];

      for(var i = 0; i < action.logs.length; i++) {
        newState.push({message: action.logs[i].message, sender: action.logs[i].sender})
      }
      return newState;

    default:
      return state;
  }
}
