import React from 'react';
import './Work.css';

// images - dimensions = 2279 x 1298

import Weather from './images/weather.png';
import Chicago from './images/chicago.png';

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
            <img className='work-img' src={Chicago} alt='weather-app' />
          </a>
        </div>
        {/* <div className='work-bottom'>

          <a
            href='http://www.elysianrage.com'
            alt='weather'
            target='_blank'
            rel='noreferrer'
          >
            <img className='work-img' src={Chicago} alt='weather-app' />
          </a>

          <a
            href='https://zelmasedano.github.io/React-Game-Hosted/'
            alt='tixtac'
            target='_blank'
            rel='noreferrer'
          > 
            <img className='work-img' src={Weather} alt='weather-app' />
          </a>
        </div>
        */}
      </div>
    </div>
  );
}

export default Work;
