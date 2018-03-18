import {combineReducers} from 'redux';
import chatLog from './chatReducer';
import clearance from './loginReducer';
//import statuses from './defaultStatusesReducer';
import statuses from './checklistReducer';

const rootReducer = combineReducers({
  chatLog,
  clearance,
  statuses,
});

export default rootReducer;
