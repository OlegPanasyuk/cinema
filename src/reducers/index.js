import { combineReducers } from 'redux';

import numberReducer from './basicReducers';

export default combineReducers({
  counting: numberReducer,
});
