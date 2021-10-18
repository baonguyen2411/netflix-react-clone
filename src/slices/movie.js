import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const ROOT_STATE_NAME = 'movie';
export const DYNAMIC_PROPS = {
  trending: 'trending',
  netflixOriginals: 'netflixOriginals',
  topRated: 'topRated',
  actionMovies: 'actionMovies',
  comedyMovies: 'comedyMovies',
  horrorMovies: 'horrorMovies',
  romanceMovies: 'romanceMovies',
  documentaries: 'documentaries',
};
const initialState = {
  [DYNAMIC_PROPS.trending]: {
    data: {},
    status: 'idle',
    error: null,
  },
  [DYNAMIC_PROPS.netflixOriginals]: {
    data: {},
    status: 'idle',
    error: null,
  },
  [DYNAMIC_PROPS.topRated]: {
    data: {},
    status: 'idle',
    error: null,
  },
  [DYNAMIC_PROPS.actionMovies]: {
    data: {},
    status: 'idle',
    error: null,
  },
  [DYNAMIC_PROPS.comedyMovies]: {
    data: {},
    status: 'idle',
    error: null,
  },
  [DYNAMIC_PROPS.horrorMovies]: {
    data: {},
    status: 'idle',
    error: null,
  },
  [DYNAMIC_PROPS.romanceMovies]: {
    data: {},
    status: 'idle',
    error: null,
  },
  [DYNAMIC_PROPS.documentaries]: {
    data: {},
    status: 'idle',
    error: null,
  },
};

const movieSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    getMoviesRequest(state, action) {
      state[action.payload.prop].status = 'loading';
    },
    getMoviesSuccess(state, action) {
      state[action.payload.prop].status = 'succeeded';
      state[action.payload.prop].data = action.payload.data;
      state[action.payload.prop].error = null;
    },
    getMoviesFailure(state, action) {
      state[action.payload.prop].status = 'failed';
      state[action.payload.prop].data = [];
      state[action.payload.prop].error = action.payload.error;
    },
  },
});

const { actions, reducer } = movieSlice;
export default reducer;
export const { getMoviesRequest, getMoviesSuccess, getMoviesFailure } = actions;
export const rootSelector = (state) => state[ROOT_STATE_NAME] || {};
export const moviesSelector = (type) => {
  return createSelector(rootSelector, (state) => state[type]);
};
