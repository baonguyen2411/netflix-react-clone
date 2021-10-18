import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import useMovie from '../../../hooks/useMovie';

import './styles.scss';

const BASE_URL = 'https://image.tmdb.org/t/p/original';

const Row = ({ title, type, fetchUrl, isLargeRow = false }) => {
  const { movies, getMovies } = useMovie(type);

  useEffect(() => {
    getMovies({ prop: type, url: fetchUrl });
  }, [type, fetchUrl]);

  return (
    <div className="nf-row">
      <h2 className="nf-row__title">{title}</h2>
      <div className="nf-row__posters">
        {movies?.data?.results &&
          movies?.data?.results.map((movie) => {
            return (
              <img
                key={movie?.id}
                src={`${BASE_URL}${
                  isLargeRow ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.name}
                className={`nf-row__poster ${
                  isLargeRow && 'nf-row__poster--large'
                }`}
              />
            );
          })}
      </div>
    </div>
  );
};

Row.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  fetchUrl: PropTypes.string.isRequired,
  isLargeRow: PropTypes.bool,
};

export default memo(Row);
