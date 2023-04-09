import React from 'react';
import logo from './logo.svg';
import './App.css';

// Pages -> Below:

// * 1) Landing (<Login> , <Signup>)
// * 2) Dashboard (<Conversation>, <Restaurant>, <Entertainment>)
// * 3) PartnerProfile (<PartnerHome>, <Quiz>)

function App() {
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
      </header>
    </div>
  );
}

export default App;
