import React from 'react';
import imagenLogo from '../../assets/images/petstyle-logo.svg'
import './Logo.scss'
import '../../assets/styles/main.scss'

const Logo = () => {
  return (
    <div className="nav__logo logo">
      <a href="./index.html">Pet<span>Style</span></a>
      <img src={imagenLogo} alt="Logo PetStyle" />
    </div>
  );
}

export default Logo;
