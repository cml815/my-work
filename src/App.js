import React from 'react'
import Link from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App-container">
      <header className="App-header">
        <Router>
          <Navbar />
        </Router>
      </header>
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Start of a portfolio website.
        </p>
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
      </div>
    </div>
  );
}

export default App;
