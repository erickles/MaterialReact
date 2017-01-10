import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Login from "./js/components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
<MuiThemeProvider>
        <Login/>
</MuiThemeProvider>

      </div>
    );
  }
}

export default App;
