import {fork, all} from 'redux-saga/effects';

import filmsSagas from './getFilmsSaga';

export default function*() {
  yield all([fork(filmsSagas)]);
}