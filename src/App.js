import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './Hello';
import Summary from './components/Summary';
import Search from './components/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Hello />
        <Summary title="Good day!" />
        <Search />
      </div>
    );
  }
}

export default App;
