import {combineReducers} from 'redux';
import chatLog from './chatReducer';

const rootReducer = combineReducers({
  chatLog
});

export default rootReducer;
