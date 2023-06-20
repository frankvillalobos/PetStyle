import React from 'react';
import './Hero.scss'

const Hero = ({ titulo }) => {
  return (
    <div class="hero">
      <button class="hero__boton" type="button">{titulo}</button>
    </div>
  );
}

export default Hero;