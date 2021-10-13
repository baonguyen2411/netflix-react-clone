import React, { memo } from 'react';

import ProtectedRoutes from './components/router/ProtectedRoutes';

import routes from './routes';

import './styles.scss';

const App = () => {
  return (
    <div className="nf-app">
      <main className={`nf-main`}>
        <ProtectedRoutes routes={routes} />
      </main>
    </div>
  );
};

export default memo(App);
