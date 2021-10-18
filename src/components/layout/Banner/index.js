import React, { memo, useEffect } from 'react';
// import PropTypes from 'prop-types'

import { DYNAMIC_PROPS } from '../../../slices/movie';
import useMovie from '../../../hooks/useMovie';

import './styles.scss';

const Banner = () => {
  const { movie, getMovies } = useMovie(DYNAMIC_PROPS?.trending);

  useEffect(() => {
    getMovies({ prop: DYNAMIC_PROPS?.trending, url: null });
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
