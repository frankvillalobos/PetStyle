import React from 'react';
import './Hero.scss'

const Hero = ({ titulo }) => {
  return (
    <div className="hero" style={{backgroundImage: `url("./images/hero-image.jpg")`}}>
      <button className="hero__boton" type="button">{titulo}</button>
    </div>
  );
}

export default Hero;