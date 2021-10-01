import React from 'react'

import './About.css'

function About() {
  return (
    <div className="about-container" id='section2'>
      <div className="about-div">
        <h3 className='about-h3'>About me.</h3>

        <p className='about-p'>Designer. Foodie. Dreamer.</p>

        <p className='about-p'>Chicago via Oslo, Norway via Mississippi. I am a Southern LatinX who looks for beauty in all things, the wonderin in every story, and the next big idea.</p>

        <p className='about-p'>I believe my background in Psychology is what makes me a great designer, and my experience in Finance makes me an efficient creator.</p>

        <p class='say-hi'>Say hi on Social Media!</p>

        <div class='social-icons'>
          <a href='http://www.linkedin.com/in/zelma-sedano-hagberg' alt="Zelma's LinkedIn" target="_blank" rel='noreferrer'><i class="fab fa-linkedin-in"></i></a>
          <a href='http://github.com/ZelmaSedano' alt="Zelma's GitHub" target="_blank" rel='noreferrer'><i class="fab fa-github" ></i></a>
          <a href='http://twitter.com/TSockk' alt="Zelma's Instagram" target="_blank" rel='noreferrer'><i class="fab fa-twitter"></i></a>
        </div>
      </div>

    </div>
  )
}

export default About
