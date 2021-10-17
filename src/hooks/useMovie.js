import { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { moviesSelector, getMoviesRequest } from '../slices/movie';

const useMovie = () => {
  const [movie, setMovie] = useState({});
  const [movies, setMovies] = useState([]);

  const moviesData = useSelector(moviesSelector);

  const dispatch = useDispatch();

  const getMovies = useCallback((params) => {
    dispatch(getMoviesRequest(params));
  }, []);

  useEffect(() => {
    setMovies(moviesData);

    if (moviesData?.data?.results) {
      setMovie(
        moviesData.data.results[
          Math.floor(Math.random() * moviesData.data.results.length - 1)
        ],
      );
    }
  }, [moviesData]);

  return { movie, movies, getMovies };
};

export default useMovie;
