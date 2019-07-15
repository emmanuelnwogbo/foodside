import React from 'react';

import '../scss/components/mobileheader.scss';

const Mobile__Header = () => {
  const openSideNav = () => {
    document.querySelector('.header').style.transform = 'translateX(0)';
    document.querySelector('.mobileheader__slider--overlay').style.display = 'block';
  }

  return (
    <div className={'mobileheader'}>
      <div className={'mobileheader__burger'} onClick={openSideNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <p className={'mobileheader__name'}><span>food</span><span>side</span></p>
    </div>
  )
}

export default Mobile__Header;