import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';

export const ROOT_STATE_NAME = 'movie';
const initialState = {
  movie: {
    data: [],
    status: 'idle',
    error: null,
  },
};

const movieSlice = createSlice({
  name: ROOT_STATE_NAME,
  initialState,
  reducers: {
    getMovieRequest(state) {
      state.movie.status = 'loading';
    },
    getMovieSuccess(state, action) {
      state.movie.status = 'succeeded';
      state.movie.data = action.payload;
      state.movie.error = null;
    },
    getMovieFailure(state, action) {
      state.movie.status = 'failed';
      state.movie.data = [];
      state.movie.error = action.payload;
    },
  },
});

const { actions, reducer } = movieSlice;
export default reducer;
export const { getMovieRequest, getMovieSuccess, getMovieFailure } = actions;
export const rootSelector = (state) => state[ROOT_STATE_NAME] || {};
export const movieSelector = createSelector(rootSelector, ({ movie }) => movie);
