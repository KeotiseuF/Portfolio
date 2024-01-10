import React from 'react';
import './App.css';

// Components
import Main from './components/Main/Main';
import NavBar from './common/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';

function App() { 
  return (
    <div id="App">
      <Main />
      <NavBar />
      <Projects />
      <AboutMe />
      <Contact />
    </div>
  );
}
export default App;