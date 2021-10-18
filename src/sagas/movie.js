import { call, delay, put, takeEvery } from 'redux-saga/effects';

import api from '../services/api';

import requests from '../constants/requests';

import {
  getMoviesRequest,
  getMoviesSuccess,
  getMoviesFailure,
} from '../slices/movie';

export function* getMovies({ payload }) {
  try {
    const { data } = yield call(api.getData, {
      url: payload?.url || requests.fetchNetflixOriginals,
    });

    if (data) {
      yield delay(500);
      yield put(getMoviesSuccess({ prop: payload?.prop, data }));
    }
  } catch (error) {
    const { message = 'Something went wrong!' } = error;

    yield put(getMoviesFailure({ prop: payload?.prop, error: message }));
  }
}

export default function* movieSaga() {
  yield takeEvery(getMoviesRequest().type, getMovies);
}
