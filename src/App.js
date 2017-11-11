import React, { Component } from 'react';
import ScreenSelector from './Components/ScreenSelector/ScreenSelector'
import HeaderNavBar from './Components/HeaderNavBar/HeaderNavBar'
import {CardGroup} from 'reactstrap'
import StepOne from './Components/Steps/StepOne'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNavBar />
        <StepOne />
        
      </div>
    );
  }
}

export default App;
