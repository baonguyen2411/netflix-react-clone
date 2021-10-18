import React, { memo } from 'react';

import Nav from '../../components/layout/Nav';
import Banner from '../../components/layout/Banner';
import Row from '../../components/layout/Row';

import requests from '../../constants/requests';

import { DYNAMIC_PROPS } from '../../slices/movie';

import './styles.scss';

const HomePage = () => {
  return (
    <div className="nf-home">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        type={DYNAMIC_PROPS?.netflixOriginals}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row
        title="Trending Now"
        type={DYNAMIC_PROPS?.trending}
        fetchUrl={requests.fetchTrending}
      />
      <Row
        title="Top Rated"
        type={DYNAMIC_PROPS?.topRated}
        fetchUrl={requests.fetchTopRated}
      />
      <Row
        title="Action Movies"
        type={DYNAMIC_PROPS?.actionMovies}
        fetchUrl={requests.fetchActionMovies}
      />
      <Row
        title="Comedy Movies"
        type={DYNAMIC_PROPS?.comedyMovies}
        fetchUrl={requests.fetchComedyMovies}
      />
      <Row
        title="Horror Movies"
        type={DYNAMIC_PROPS?.horrorMovies}
        fetchUrl={requests.fetchHorrorMovies}
      />
      <Row
        title="Romance Movies"
        type={DYNAMIC_PROPS?.romanceMovies}
        fetchUrl={requests.fetchRomanceMovies}
      />
      <Row
        title="Documentaries"
        type={DYNAMIC_PROPS?.documentaries}
        fetchUrl={requests.fetchDocumentaries}
      />
    </div>
  );
};

HomePage.propTypes = {};

export default memo(HomePage);
