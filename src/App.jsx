import React, { Component } from 'react';
import axios from 'axios';

import Container from './components/Container';
import Header from './components/Header';

import './scss/main.scss';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container />
      </div>
    )
  }
}

export default App;