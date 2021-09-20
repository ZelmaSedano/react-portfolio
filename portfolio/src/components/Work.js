import React from 'react';
import './Work.css';

// images - dimensions = 2279 x 1298

import Weather from './images/weather.png';
import Chicago from './images/chicago.png';
import Ladies from './images/ladies.png';
import Elysian from './images/elysian.png';

function Work() {
  return (
    <div className='work' id='section1'>
      <div className='work-container'>
        <h3 className='work-text'>Work.</h3>
        <div className='work-top'>
          {/* image/link 1 */}
          <a
            href='https://weather-app-zelma.netlify.app/'
            alt='weather'
            target='_blank'
            rel='noreferrer'
          >
            <img className='work-img' src={Weather} alt='weather-app' />
          </a>
          {/* image/link 2 */}
          <a
            href='https://chicago-tenants-rights.herokuapp.com/'
            alt='chicago'
            target='_blank'
            rel='noreferrer'
          >
            <img className='work-img' src={Chicago} alt='chicago-app' />
          </a>
        </div>
        {/* bottom work section */}
        <div className='work-bottom'>
          <a
            href='https://github.com/ZelmaSedano/1_Assignments/tree/main/11_quiz'
            alt='ladies'
            target='_blank'
            rel='noreferrer'
          >
            <img className='work-img' src={Ladies} alt='quiz-app' />
          </a>

          <a
            href='http://www.elysianrage.com'
            alt='elysian_rage_art'
            target='_blank'
            rel='noreferrer'
          >
            <img className='work-img' src={Elysian} alt='elysian-rage-art' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Work;
