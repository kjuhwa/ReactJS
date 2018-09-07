import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';

// 컴포넌트 가져오기
import Counter from './Counter'
import Buttons from './Buttons'
import Option from './Option1'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Buttons />
        <Option />
      </div>
    );
  }
}

export default App;
