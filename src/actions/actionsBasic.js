import { FILMS, FILM } from './actionTypes';

export const getFilmsAction = query => ({
  type: FILMS.REQUEST_FILMS,
  payload: query,
});

export const getFilmsActionSuccess = data => ({
  type: FILMS.REQUEST_FILMS_SUCCESS,
  payload: data,
});

export const getFilmsActionFailed = error => ({
  type: FILMS.REQUEST_FILMS_FAILED,
  payload: error,
});

export const getFilmAction = id => ({
  type: FILM.REQUEST_FILM,
  payload: id,
});

export const getFilmActionSuccess = data => ({
  type: FILM.REQUEST_FILM_SUCCESS,
  payload: data,
});

export const getFilmActionFailed = error => ({
  type: FILM.REQUEST_FILM_FAILED,
  payload: error,
});

export const clearFilmInfoAction = () => ({
  type: FILM.REQUEST_FILM_FAILED,
  payload: {},
});

export default {
  getFilmsAction,
  getFilmsActionSuccess,
  getFilmsActionFailed,
  getFilmAction,
  getFilmActionSuccess,
  getFilmActionFailed,
  clearFilmInfoAction,
};
