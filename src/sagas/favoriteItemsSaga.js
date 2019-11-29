import { takeEvery, call } from 'redux-saga/effects';
import { FILM } from '../actions/actionTypes';
import favoriteItemsStorageService from '../services/favoriteItemsStorageService';

function* favoriteItemsSaga({ payload }) {
  console.log('SAGA!!!!!!');
  yield call(favoriteItemsStorageService.favoriteItemsCombiner, payload);
}

export default function*() {
  yield takeEvery(FILM.ADD_FILM_TO_FAVORITE, favoriteItemsSaga);
  yield takeEvery(FILM.REMOVE_FILM_FROM_FAVORITE, favoriteItemsSaga);
}
