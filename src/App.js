import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CalcBody from './containers/CalcBody/CalcBody';
import reactIcon from './logo.svg';



class App extends Component{
  render(){
    return (
      <div className="App">
         <div className="header">
              <img src={reactIcon} className="logo"/>
                <h1>React Calculator</h1>
              <img src={reactIcon} className="logo" />
          </div>
          <div className="CalcBody">
              <CalcBody />
          </div>
      </div>
    );
  }
}

          // <img src={logo} className="App-logo" alt="logo" />
export default App;
