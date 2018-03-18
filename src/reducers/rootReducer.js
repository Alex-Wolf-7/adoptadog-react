import {combineReducers} from 'redux';
import chatLog from './chatReducer';
import clearance from './loginReducer';
//import statuses from './defaultStatusesReducer';
import statuses from './checklistReducer';
import inputs from './applicationReducer';

const rootReducer = combineReducers({
  chatLog,
  clearance,
  statuses,
  inputs,
});

export default rootReducer;
