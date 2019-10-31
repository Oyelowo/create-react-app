import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>
          Template Demo Modified by Oyelowo Oyedayo to include LESS and less
          module support. Feel free to contact me if you gave any question
        </p>
        <a href="https://www.linkedin.com/in/oyelowo-oyedayo/">
          LinkedIn: Oyelowo Oyedayo
        </a>

        <a href="https://github.com/Oyelowo/create-react-app">
          Clone the modified script from here
        </a>
      </header>
    </div>
  );
}

export default App;
