import './Header.css';
import React, { useEffect, useState } from 'react';
import Lang from '../Lang/Lang.tsx';
import NavBar from '../NavBar/NavBar.jsx';
import sun from '../../assets/icon-sun.png';
// import moon from '../../assets/icon-moon.png';

function Header () {
    const [displayNav, setDisplayNav] = useState(Boolean);

    useEffect(() => {
      window.innerWidth >= 800 && setDisplayNav(true);
      function handleScroll(e) {
        if(window.innerWidth >= 800) {
          setDisplayNav(true);
        } else {
          setDisplayNav(false);
        }
      }
      window.addEventListener('resize', handleScroll);
      return () => window.removeEventListener('resize', handleScroll);
    }, [displayNav]);
    
    return (
        <div className='header'>
            <div className='dark-mode'>
                <img src={sun} alt="sun" />
            </div>
            { displayNav && <NavBar /> }
            <Lang />
        </div>
    )
}

export default Header;