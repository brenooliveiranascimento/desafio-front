import { combineReducers } from 'redux';
import herosModules from './herosModules/herosModules.';
import heroDetail from './heroDetailsModule/heroDetailsModule';

const rootReducer = combineReducers({
  herosModules,
  heroDetail,
});

export default rootReducer;
