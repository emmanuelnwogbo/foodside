import React, { Component } from 'react';
import axios from 'axios';

import Container from './components/Container';
import Header from './components/Header';

import './scss/main.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  keepSearchUiOpen = (event) => {
    if (!event.target.classList.contains('close-search-ui')) {
      return document.getElementById('search').focus();
    }

    document.getElementById('search').blur();
    document.getElementById('search-ui').style.display = `none`;
  }
  
  render() {
    return (
      <div>
        <div id='search-ui' onClick={this.keepSearchUiOpen}>
          <div></div>
          <span>
            <svg className={'close-search-ui'}>
              <use className={'close-search-ui'} xlinkHref="./imgs/sprite.svg#icon-cross" />
            </svg>
          </span>
        </div>
        <Header />
        <Container />
      </div>
    )
  }
}

export default App;