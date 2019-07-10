import React, { Suspense, lazy, Component } from 'react';

import RightContainer from './RightContainer';
import LeftContainer from './LeftContainer';

import '../scss/components/container.scss'

class Container extends Component {
  render() {
    return (
      <div className={'container'}>
        <LeftContainer />
        <RightContainer />
      </div>
    )
  }
}

export default Container;