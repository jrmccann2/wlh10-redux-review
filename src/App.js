import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from "./Components/Form"
import Display from "./Components/Display"

class App extends Component {
  render() {
    return (
      <>
        <Form />
        <Display />
      </>
    );
  }
}

export default App;
