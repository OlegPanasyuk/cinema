import { put, takeEvery, all, call } from 'redux-saga/effects';

import { getFilms } from '../services/filmsService';

import { FILMS } from '../actions/actionTypes';

import Act from '../actions/index';

function* getFilmList({ payload }) {
  const response = yield call(getFilms, { query: payload });
  if (response.status === 200) {
    debugger;
    yield put(Act.getFilmsActionSuccess(response.data.Search));
  } else {
    console.log('dfsdf');
  }
}
// notice how we now only export the rootSaga
// single entry point to start all Sagas at once

export default function*() {
  yield takeEvery(FILMS.REQUEST_FILMS, getFilmList);
}
