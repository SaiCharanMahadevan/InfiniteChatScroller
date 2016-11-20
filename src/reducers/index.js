import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from './app';

const rootReducer = combineReducers({
  routing: routerReducer,
});

export default rootReducer;
