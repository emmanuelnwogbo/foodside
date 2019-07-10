import React, { Suspense, lazy, Component } from 'react';

import SearchBar from './SearchBar';
import '../scss/components/header.scss'

class Header extends Component {
  render() {
    return (
      <div className={'header'}>
        <p className={'header__name'}><span>food</span><span>side</span></p>
        <SearchBar />
      </div>
    )
  }
}

export default Header;