import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import '../Styles/Navbar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton(); 
    window.addEventListener('resize', showButton);
    return () => {
      window.removeEventListener('resize', showButton);
    };
  }, []);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-log'>AD Travels</Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? "icon-opened" : "icon-closed"}>☰</i>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                Services
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                Products
              </Link>
            </li>

            <li className='nav-item'>
              <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                Sign-up
              </Link>
            </li>

          </ul>

          {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
          
        </div>
      </nav>
    </>
  );
}

export default NavBar;
