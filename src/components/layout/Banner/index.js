import React, { memo } from 'react';
// import PropTypes from 'prop-types'

import './styles.scss';

const Banner = () => {
  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };

  return (
    <header className="nf-banner">
      <div className="nf-banner__contents">
        <h1 className="nf-banner__title">Movie Name</h1>
        <div className="nf-banner__buttons">
          <button className="nf-banner__button">Play</button>
          <button className="nf-banner__button">My List</button>
        </div>
        <h1 className="nf-banner__description">{truncate('', 150)}</h1>
      </div>

      <div className="nf-banner__fadeBotton" />
    </header>
  );
};

Banner.propTypes = {};

export default memo(Banner);
