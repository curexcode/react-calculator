import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CalcBody from './containers/CalcBody/CalcBody';

class App extends Component{
  render(){
    return (
      <div className="App">
        <CalcBody/>
      </div>
    );
  }
}

          // <img src={logo} className="App-logo" alt="logo" />
export default App;
