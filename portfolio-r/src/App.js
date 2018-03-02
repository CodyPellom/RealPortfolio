import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyComponent from './components/Mycomponent';
import Card from './components/Card'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Styled from 'styled-components'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MuiThemeProvider>
          <MyComponent />
        </MuiThemeProvider>

      </div>
    );
  }
}

export default App;




