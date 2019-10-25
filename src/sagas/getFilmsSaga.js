import { put, takeEvery, call, select } from 'redux-saga/effects';

import { getFilms, getFilm } from '../services/filmsService';

import { FILMS, FILTERS, FILM } from '../actions/actionTypes';

import Act from '../actions/index';

function* getFilmsList() {
  const filters = yield select(state => state.counting.filters);
  const response = yield call(getFilms, { query: filters });
  if (response.data.Response !== 'False') {
    yield put(Act.getFilmsActionSuccess(response.data));
  } else {
    const ER = {message: response.data.Error, status: response.status};
    yield put(Act.getFilmsActionFailed(ER));
  }
}

function* getFilmInformation({payload: id}) {
  const response = yield call(getFilm, id);
  if (response.data.Response !== 'False') {
    yield put(Act.getFilmActionSuccess(response.data))
  } else {
    const ER = {message: response.data.Error, status: response.status};
    yield put(Act.getFilmActionFailed(ER));
  }
}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once

export default function*() {
  yield takeEvery(FILMS.REQUEST_FILMS, getFilmsList);
  yield takeEvery(FILTERS.NUMBER_PAGE, getFilmsList);
  yield takeEvery(FILM.REQUEST_FILM, getFilmInformation)
}
