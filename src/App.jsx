import './App.css';
import React, { useEffect, useState } from 'react';
import { ThemeContext } from './services/ThemeContext';

// Components
import Main from './components/Main/Main';
import NavBar from './common/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';

function App() {
  const [displayNav, setDisplayNav] = useState(Boolean);
  const [theme, setTheme] = useState('light');
  const valueContext = { theme, setTheme };

  const body = document.getElementsByTagName('body');

  body[0].setAttribute('class', theme === 'light' ? 'light-background' : 'dark-background');

  useEffect(() => {
    window.innerWidth < 800 && setDisplayNav(true);
    function handleScroll(e) {
      if(window.innerWidth < 800) {
        setDisplayNav(true);
      } else {
        setDisplayNav(false);
      }
    }
    window.addEventListener('resize', handleScroll);
    return () => window.removeEventListener('resize', handleScroll);
  }, [displayNav]);

  return (
    <div id="App">
      <ThemeContext.Provider value={valueContext}>
        <Main />
        { displayNav && <NavBar /> }
        <Projects />
        <AboutMe />
        <Contact />
      </ThemeContext.Provider>
    </div>
  );
}
export default App;