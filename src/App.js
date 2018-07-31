import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Label from './Label';

class App extends Component {
  render() {
    const message = this.props.message || "Welcome to React";
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{message}</h1>
        </header>
        <p className="App-intro">
          {this.props.text}
        </p>
        <Label type="alert"/>
      </div>
    );
  }
}

export default App;
