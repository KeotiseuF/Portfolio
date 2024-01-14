import React, { useEffect, useState } from 'react';
import './App.css';

// Components
import Main from './components/Main/Main';
import NavBar from './common/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';

function App() {
  const [displayNav, setDisplayNav] = useState(Boolean);

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
      <Main />
      { displayNav && <NavBar /> }
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}
export default App;