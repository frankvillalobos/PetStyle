import React from 'react';
import './Logo.scss';
import '../../assets/styles/main.scss'

const Logo = () => {
  return (
    <div className="nav__logo logo">
      <a href="./index.html">Pet<span>Style</span></a>
      <img src='./images/petstyle-logo.svg' alt="Logo PetStyle" />
    </div>
  );
}

export default Logo;
