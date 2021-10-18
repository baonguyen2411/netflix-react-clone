import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { moviesSelector, getMoviesRequest } from '../slices/movie';

const useMovie = (type) => {
  const [movie, setMovie] = useState({});

  const movies = useSelector(moviesSelector(type));

  const dispatch = useDispatch();

  const getMovies = useCallback((params) => {
    dispatch(getMoviesRequest(params));
  }, []);

  useEffect(() => {
    if (movies?.data?.results) {
      setMovie(
        movies.data.results[
          Math.floor(Math.random() * movies.data.results.length - 1)
        ],
      );
    }
  }, [movies]);

  return { movie, movies, getMovies };
};

export default useMovie;
