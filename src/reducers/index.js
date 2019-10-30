import { combineReducers } from 'redux';

import filmsReducer from './basicReducers';
import filmReducer from './filmReducers';

export default combineReducers({
  counting: filmsReducer,
  filmToShow: filmReducer,
});
