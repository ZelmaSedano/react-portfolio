// Desktop/2) React/YouTube/Brian
import React, { useState, useEffect } from 'react';
import { Link as Link1 } from 'react-router-dom';
import { Link as Link2 } from 'react-scroll';

// documents
// import { SignInButton } from './SignInButton';
import './Navbar.css';
// import logo from './images/logo1.jpeg';

// COMPONENT
function Navbar() {
  // States to alter:
  // used in handleclick(Hamburger/X) & closeMobileMenu(LINKS)
  const [click, setClick] = useState(false);
  // show button or not - used in useEffect
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // Contact Button disappears in Mobile View ********************
  const showButton = () => {
    if (window.innerWidth <= 1140) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  // button will only render once b/c of the empty parameters - if we don't have this there the button will pop up in Mobile Menu when you refresh page
  useEffect(() => {
    showButton();
  }, []);

  // when you change the size of the window, the button shows up
  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        {/* holds entire navbar */}
        <div className='navbar-container'>
          {/* Zelma text */}
          <Link1 to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <h4 className='logo-text'>Zelma.</h4>
            {/* <i class='fab fa-typo3' /> */}
          </Link1>

          {/* Hamburger Menu */}
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          {/* Nav Menu */}
          {/* .active class is added in mobile */}
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link1 to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link1>
            </li>

            {/* Smooth Scroll Section */}
            <li className='nav-item'>
              <Link2
                className='nav-links smooth-scroll'
                to='section1'
                activeClass='active'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Work
              </Link2>
            </li>
            <li className='nav-item '>
              <Link2
                className='nav-links smooth-scroll'
                activeClass='active'
                to='section2'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About
              </Link2>
            </li>
            {/* End Smooth Scroll Section */}

            {/* Mobile SignUp Btn - Only shows up on Mobile */}
            <li className='mobile-link'>
              <a
                href="mailto:zvsedano@gmail.com"
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* END Nav Menu */}

          <div className='nav-btn'>
            <a href='mailto:zvsedano@gmail.com'>
              <button className='btn'>Contact</button>
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
