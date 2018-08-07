import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Label from './Label';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Button from './Button';

class App extends Component {
  render() {
    const message = this.props.message || "Welcome to React";
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Button>Click</Button>
          <Button width="200px" height="30px" color="onSecondary" bgColor="secondary">Click</Button>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
