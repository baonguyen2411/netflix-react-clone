import React, { memo } from 'react';
// import PropTypes from 'prop-types';

import netflixLogo from '../../assets/images/netflix-logo.png';

import './styles.scss';

const LoginPage = () => {
  return (
    <div className="nf-login">
      <div className="nf-login__background">
        <img className="nf-login__logo" src={netflixLogo} alt="Netflix" />
        <button className="nf-login__button">Sign In</button>

        <div className="nf-login__gradient" />
      </div>

      <div className="nf-login__body">
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>
            Ready to watch? Enter your email to create or restart your
            membership.
          </h3>

          <div className="nf-login__input">
            <form>
              <input type="email" placeholder="Email Address" />
              <button type="submit" className="nf-login__get-started">
                GET STARTED
              </button>
            </form>
          </div>
        </>
      </div>
    </div>
  );
};

LoginPage.propTypes = {};

export default memo(LoginPage);
