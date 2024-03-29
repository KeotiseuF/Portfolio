import './Header.css';
import React, { useContext, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../../services/ThemeContext.jsx';
import Lang from '../Lang/Lang.tsx';
import NavBar from '../NavBar/NavBar.jsx';
import sun from '../../assets/icon-sun.png';
import moon from '../../assets/icon-moon.png';

function Header () {
    const { t } = useTranslation();
    const [displayNav, setDisplayNav] = useState(Boolean);
    const { setTheme, theme } = useContext(ThemeContext);
    const inputClass = `dark-mode ${theme === 'light' ? 'input-light' : 'input-dark' }`;
    const headerClass = `header ${theme === 'light' ? 'header-light-laptop' : 'header-dark-laptop' }`;
    const srcImg = theme === 'light' ? moon : sun;
    const altImg = theme === 'light' ? t('header.moon') : t('header.sun');
    
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
        <div className={headerClass}>
            <div className={inputClass} tabIndex="0">
                <input
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={(e) => {
                        setTheme(e.target.checked ? 'dark' : 'light');
                    }}
                />
                <img src={srcImg} alt={altImg} />
            </div>
            { displayNav && <NavBar /> }
            <Lang theme={theme}/>
        </div>
    )
}

export default Header;