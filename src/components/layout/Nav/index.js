import React, { useState, useEffect, memo } from 'react';

import logo from '../../../assets/images/netflix-logo.png';
import avatar from '../../../assets/images/netflix-avatar.png';

import './styles.scss';

const Nav = () => {
  const [show, setShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);

    return () => {
      window.removeEventListener('scroll', transitionNavBar);
    };
  }, []);

  return (
    <div className={`nf-nav ${show ? 'nf-nav--black' : ''}`}>
      <div className="nf-nav__contents">
        <img src={logo} alt="Netflix Logo" className="nf-nav__logo" />
        <img
          src={avatar}
          alt="Avatar Profile Netflix"
          className="nf-nav__avatar"
        />
      </div>
    </div>
  );
};

export default memo(Nav);
