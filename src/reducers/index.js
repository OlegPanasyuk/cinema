import { combineReducers } from 'redux';

import filmsReducer from './basicReducers';
import filmReducer from './filmReducers';
import systemReducers from './systemReducers';
import authReducers from './authReducers';

export default combineReducers({
  counting: filmsReducer,
  filmToShow: filmReducer,
  system: systemReducers,
  auth: authReducers,
});
