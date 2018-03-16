import {combineReducers} from 'redux';
import chatLog from './chatReducer';
import clearance from './loginReducer';

const rootReducer = combineReducers({
  chatLog,
  clearance
});

export default rootReducer;
