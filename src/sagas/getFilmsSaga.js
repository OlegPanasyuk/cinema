import { put, takeEvery, call } from 'redux-saga/effects';

import { getFilms } from '../services/filmsService';

import { FILMS } from '../actions/actionTypes';

import Act from '../actions/index';

function* getFilmList({ payload }) {
  const response = yield call(getFilms, { query: payload });
  if (response.data.Response !== 'False') {
    yield put(Act.getFilmsActionSuccess(response.data.Search));
  } else {
    const ER = {message: response.data.Error, status: response.status};
    yield put(Act.getFilmsActionFailed(ER));
  }
}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once

export default function*() {
  yield takeEvery(FILMS.REQUEST_FILMS, getFilmList);
}
