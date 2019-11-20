import { combineReducers } from 'redux';

import filmsReducer from './basicReducers';
import filmReducer from './filmReducers';
import systemReducers from './systemReducers';

export default combineReducers({
  counting: filmsReducer,
  filmToShow: filmReducer,
  system: systemReducers,
});
