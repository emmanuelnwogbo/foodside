import React, { Suspense, lazy, Component } from 'react';

const Recipe = lazy(() => import('./Recipe'));
import '../scss/components/container.scss'

class LeftContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devRecipes: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    }
  }

  returnRecipeCards = () => {
    return this.state.devRecipes.map(recipe => {
      return (
        <Suspense key={recipe} fallback={<div></div>}>
          <Recipe />
        </Suspense>
      )
    })
  }

  render() {
    return (
      <div className={'container__left container__side'}>
        {this.returnRecipeCards()}
      </div>
    )
  }
}

export default LeftContainer;