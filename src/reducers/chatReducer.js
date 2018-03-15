import initialState from './initialState';
import {SEND_MESSAGE} from '../actions/actionTypes';

export default function chat(state = initialState.chatLog, action) {
  let newState;
  switch (action.type) {

    case SEND_MESSAGE:

      newState = state.concat(action.msg);
      return newState;

    default:
      return state;
  }
}
