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
    const request = yield call(api.getData, {
      url: payload?.url || requests.fetchNetflixOriginals,
    });

    if (request && request?.data) {
      yield delay(500);
      yield put(getMoviesSuccess(request?.data));
    }
  } catch (error) {
    const { message = 'Something went wrong!' } = error;

    yield put(getMoviesFailure(message));
  }
}

export default function* movieSaga() {
  yield takeEvery(getMoviesRequest().type, getMovies);
}
