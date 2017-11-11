import React, { Component } from 'react';
import ScreenSelector from './Components/ScreenSelector/ScreenSelector'
import {CardGroup} from 'reactstrap'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <CardGroup className="suggestScreen">
          <ScreenSelector />
          <ScreenSelector />
          <ScreenSelector />
          <ScreenSelector />
          <ScreenSelector />
        </CardGroup>
      </div>
    );
  }
}

export default App;
