import { fork, all } from 'redux-saga/effects';

import filmsSagas from './getFilmsSaga';
import favoriteItemsSaga from './favoriteItemsSaga';

export default function*() {
  yield all([fork(favoriteItemsSaga), fork(filmsSagas)]);
}
