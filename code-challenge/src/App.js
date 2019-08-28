import React, {Component} from 'react';
import './App.css';
import C1 from './components/C1';
import styled from 'styled-components';

const Style = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`

class App extends Component {
  render () {
    return (
      <Style>
        <h1>React Basics Coding Challenge</h1>
        <C1 />
      </Style>
    )
  }
}

export default App;
