import { combineReducers } from 'redux';

import filmsReducer from './basicReducers';
import filmReducer from './filmReducers';
import systemReducers from './systemReducers';
import authReducers from './authReducers';
import favoriteItemsReducers from './favoriteItemsReducers';

export default combineReducers({
  counting: filmsReducer,
  filmToShow: filmReducer,
  system: systemReducers,
  auth: authReducers,
  personal: favoriteItemsReducers,
});
