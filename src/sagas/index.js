import { all } from 'redux-saga/effects';

import movieSaga from '../sagas/movie';

export default function* rootSaga() {
  yield all([movieSaga()]);
}
