import { combineReducers } from 'redux';
import herosModules from './herosModules/herosModules.';

const rootReducer = combineReducers({
  herosModules,
});

export default rootReducer;
