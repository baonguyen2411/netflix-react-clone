import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const ROOT_STATE_NAME = 'movie';
const initialState = {
  movies: {
    data: {},
    status: 'idle',
    error: null,
  },
};

const movieSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    getMoviesRequest(state) {
      state.movies.status = 'loading';
    },
    getMoviesSuccess(state, action) {
      state.movies.status = 'succeeded';
      state.movies.data = action.payload;
      state.movies.error = null;
    },
    getMoviesFailure(state, action) {
      state.movies.status = 'failed';
      state.movies.data = [];
      state.movies.error = action.payload;
    },
  },
});

const { actions, reducer } = movieSlice;
export default reducer;
export const { getMoviesRequest, getMoviesSuccess, getMoviesFailure } = actions;
export const rootSelector = (state) => state[ROOT_STATE_NAME] || {};
export const moviesSelector = createSelector(
  rootSelector,
  ({ movies }) => movies,
);
