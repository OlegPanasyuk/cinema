import { put, takeEvery, call, select } from 'redux-saga/effects';

import { getFilms } from '../services/filmsService';

import { FILMS, FILTERS } from '../actions/actionTypes';

import Act from '../actions/index';

function* getFilmList() {
  const filters = yield select(state => state.counting.filters);
  const response = yield call(getFilms, { query: filters });
  if (response.data.Response !== 'False') {
    yield put(Act.getFilmsActionSuccess(response.data));
  } else {
    const ER = {message: response.data.Error, status: response.status};
    yield put(Act.getFilmsActionFailed(ER));
  }
}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once

export default function*() {
  yield takeEvery(FILMS.REQUEST_FILMS, getFilmList);
  yield takeEvery(FILTERS.NUMBER_PAGE, getFilmList);
}
