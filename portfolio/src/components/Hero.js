import React from 'react';
import me from './images/me.png';
import './Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-flex'>
        <img src={me} alt='me'></img>
        <div className='hero-text'>
          <p>Hi, I'm Zelma Sedano.</p>
          <p>Let's work together!</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
