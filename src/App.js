import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Label from './Label';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';

class App extends Component {
  render() {
    const message = this.props.message || "Welcome to React";
    return (
      <ThemeProvider theme={theme}></ThemeProvider>
    );
  }
}

export default App;
