import React, { Component } from 'react';
import ScreenSelector from './Components/ScreenSelector/ScreenSelector'
import HeaderNavBar from './Components/HeaderNavBar/HeaderNavBar'
import {CardGroup} from 'reactstrap'
import StepOne from './Components/Steps/StepOne'
import StepTwo from './Components/Steps/StepTwo'
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state={
    pos:0
  }
  render() {
    return (
      <div className="App">
        <HeaderNavBar />
        {this.state.pos == 0 ? <StepTwo changeView={()=>this.setState({pos:this.state.pos+1})} /> : this.state.pos == 1 ? <StepOne changeView={()=>this.setState({pos:this.state.pos+1})} /> : null}
        
        
        
      </div>
    );
  }
}

export default App;
