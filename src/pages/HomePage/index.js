import React, { memo } from 'react';

import Nav from '../../components/layout/Nav';
import Banner from '../../components/layout/Banner';

import './styles.scss';

const HomePage = () => {
  return (
    <div className="nf-home">
      <Nav />

      <Banner />
    </div>
  );
};

HomePage.propTypes = {};

export default memo(HomePage);
