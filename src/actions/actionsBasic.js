import { FILMS } from './actionTypes';

export const getFilmsAction = (query) => ({
  type: FILMS.REQUEST_FILMS,
  payload: query,
});

export const getFilmsActionSuccess = data => ({
  type: FILMS.REQUEST_FILMS_SUCCESS,
  payload: data,
});

export const getFilmsActionFailed = (error) => ({
  type: FILMS.REQUEST_FILMS_FAILED,
  payload: error,
});

export default {
  getFilmsAction,
  getFilmsActionSuccess,
  getFilmsActionFailed
}