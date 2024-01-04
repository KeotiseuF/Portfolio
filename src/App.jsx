import React from 'react';
import './App.css';

// Components
import Main from './components/Main/Main';
import NavBar from './common/NavBar/NavBar';
import Projects from './components/Projects/Projects';

function App() { 
  return (
    <div id="App">
      <Main />
      <NavBar />
      <Projects />
    </div>
  );
}
export default App;