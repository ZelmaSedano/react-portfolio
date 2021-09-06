import React from 'react';
import './Work.css';

// images
// import Chicago from './images/chicago.png';
import Weather from './images/weather.png';
import Chicago from './images/chicago.png';
import Quiz from './images/qiuz.png';
import tictac from './images/tictactoe.png';

function Work() {
  return (
    <div className='work' id='section1'>
      <h3 className='work-text'>Work.</h3>
      <section class='cards'>
        <article>
          <a
            href='https://weather-app-zelma.netlify.app/'
            alt='weather'
            target='_blank'
            rel='noreferrer'
          >
            <img class='article-img' src={Weather} alt=' ' />
          </a>
        </article>
        <article>
          <a
            href='https://weather-app-zelma.netlify.app/'
            alt='weather'
            target='_blank'
            rel='noreferrer'
          >
            <img class='article-img' src={Chicago} alt=' ' />
          </a>
        </article>
        <article>
          <a
            href='https://weather-app-zelma.netlify.app/'
            alt='weather'
            target='_blank'
            rel='noreferrer'
          >
            <img class='article-img' src={Quiz} alt=' ' />
          </a>
        </article>

        <article>
          <a
            href='https://weather-app-zelma.netlify.app/'
            alt='weather'
            target='_blank'
            rel='noreferrer'
          >
            <img class='article-img' src={tictac} alt=' ' />
          </a>
        </article>
        <article>
          <a
            href='https://weather-app-zelma.netlify.app/'
            alt='weather'
            target='_blank'
            rel='noreferrer'
          >
            <img class='article-img' src={tictac} alt=' ' />
          </a>
        </article>
        <article>
          <a
            href='https://weather-app-zelma.netlify.app/'
            alt='weather'
            target='_blank'
            rel='noreferrer'
          >
            <img class='article-img' src={Weather} alt=' ' />
          </a>
        </article>
      </section>
    </div>
  );
}

export default Work;

//<article>
{
  /* image/link 1 */
}
// <a
//     href='https://weather-app-zelma.netlify.app/'
//     alt='weather'
//     target='_blank'
//     rel='noreferrer'
//   >
//     <img className='work-img' src={Weather} alt='weather-app' />
//   </a>
// </article>
