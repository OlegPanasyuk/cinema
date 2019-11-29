import { handleActions } from 'redux-actions';
import { FILM } from '../actions/actionTypes';

const initialState = {
  favoritesItems: ['tt4154756'],
};

function addFilmToFavorite(state, { payload }) {
  const favoritesItems = Array.from(state.favoritesItems);
  favoritesItems.push(payload);
  return {
    ...state,
    favoritesItems,
  };
}

function removeFilmFromFavoriteReducer(state, { payload }) {
  const favoritesItems = Array.from(state.favoritesItems).filter(
    el => el !== payload
  );
  return {
    ...state,
    favoritesItems,
  };
}

export default handleActions(
  {
    [FILM.ADD_FILM_TO_FAVORITE]: addFilmToFavorite,
    [FILM.REMOVE_FILM_FROM_FAVORITE]: removeFilmFromFavoriteReducer,
  },
  initialState
);
