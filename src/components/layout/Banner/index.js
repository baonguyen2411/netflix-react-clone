import React, { memo, useEffect, useCallback, useMemo } from 'react';
// import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux';

import { moviesSelector, getMoviesRequest } from '../../../slices/movie';

import './styles.scss';

const Banner = () => {
  const movies = useSelector(moviesSelector);

  const movie = useMemo(() => {
    if (movies?.data?.results) {
      return movies.data.results[
        Math.floor(Math.random() * movies.data.results.length - 1)
      ];
    }

    return {};
  }, [movies]);

  const dispatch = useDispatch();

  const getMovie = useCallback(() => {
    dispatch(getMoviesRequest());
  }, []);

  useEffect(() => {
    getMovie();
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <header
      className="nf-banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
      }}
    >
      <div className="nf-banner__contents">
        <h1 className="nf-banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="nf-banner__buttons">
          <button className="nf-banner__button">Play</button>
          <button className="nf-banner__button">My List</button>
        </div>
        <h1 className="nf-banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="nf-banner__fadeBotton" />
    </header>
  );
};

Banner.propTypes = {};

export default memo(Banner);
