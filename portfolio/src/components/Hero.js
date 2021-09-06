import React from 'react';
import me from './me.png';
import './Hero.css';

function Hero() {
  return (
    <div className='hero'>
      <div className='hero-flex'>
        <img src={me} alt='me'></img>
        <div className='hero-text'>
          <p>Hi, I'm Zelma Valentia.</p>
          <p>Let's work together!</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
