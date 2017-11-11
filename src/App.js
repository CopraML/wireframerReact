import React, { Component } from 'react';
import ScreenSelector from './Components/ScreenSelector/ScreenSelector'
import HeaderNavBar from './Components/HeaderNavBar/HeaderNavBar'
import {CardGroup} from 'reactstrap'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderNavBar />
        <div className="container">
          <div className="justify-content-sm-center row">
            <div className="col col-sm-8">
              <h2>Pick 5 of your Favorite Options</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        
        

        <div className="row justify-content-sm-center">
          <div className="col col-md-3">
            <div className="screenShotImageContainer">
              <ScreenSelector />
            </div>
          </div>

          <div className="col col-md-3">
            <div className="screenShotImageContainer">
              <ScreenSelector />
            </div>
          </div>

          <div className="col col-md-3">
            <div className="screenShotImageContainer">
              <ScreenSelector />
            </div>
          </div>

          <div className="col col-md-3">
            <div className="screenShotImageContainer">
              <ScreenSelector />
            </div>
          </div>

          <div className="col col-md-3">
            <div className="screenShotImageContainer">
              <ScreenSelector />
            </div>
          </div>
        </div>
        </div>
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
