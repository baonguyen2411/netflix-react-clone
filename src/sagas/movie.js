import { call, delay, put, takeEvery } from 'redux-saga/effects';

import api from '../services/api';

import requests from '../constants/requests';

import {
  getMovieRequest,
  getMovieSuccess,
  getMovieFailure,
} from '../slices/movie';

export function* getMovie() {
  try {
    const request = yield call(api.getData, {
      url: requests.fetchNetflixOriginals,
    });

    if (request && request?.data) {
      yield delay(500);
      yield put(getMovieSuccess([]));
    }
  } catch (error) {
    const { message = 'Something went wrong!' } = error;

    yield put(getMovieFailure(message));
  }
}

export default function* movieSaga() {
  yield takeEvery(getMovieRequest().type, getMovie);
}
