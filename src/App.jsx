import React, { Component } from 'react';

import Container from './components/Container';
import Header from './components/Header';

import './scss/main.scss';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mobileHeader: null
    }
  }

  keepSearchUiOpen = (event) => {
    if (!event.target.classList.contains('close-search-ui')) {
      return document.getElementById('search').focus();
    }

    document.getElementById('search').blur();
    document.getElementById('search-ui').style.display = `none`;
  }

  componentDidMount() {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      import('./components/Mobile__Header').then(result => {
        this.setState({
          mobileHeader: result.default
        }, () => {
          console.log(this.state);
        })
      })
    }
  }

  returnMobileHeader = () => {
    if (this.state.mobileHeader !== null) {
      return <this.state.mobileHeader />
    }
  }

  closeSidenav = () => {
    document.querySelector('.header').style.transform = 'translateX(-100%)';
    document.querySelector('.mobileheader__slider--overlay').style.display = 'none';
  }
  
  render() {
    return (
      <div>
        {this.returnMobileHeader()}
        <div className={'mobileheader__slider--overlay'} onClick={this.closeSidenav}></div>
        <div id='search-ui' onClick={this.keepSearchUiOpen}>
          <div></div>
          <span className={'close-search-ui'}>
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