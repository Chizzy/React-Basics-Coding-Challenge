import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import C1 from './C1';
import C2 from './C2';

class App extends Component {
  render () {
    return (
      <div>
        <h1>React Basics Coding Challenge</h1>
        <C1 />
        <C2 />
      </div>
    )
  }
}

export default App;
