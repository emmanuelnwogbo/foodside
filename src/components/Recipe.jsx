import React from 'react';

import '../scss/components/recipe.scss'

const Recipe = () => {
  return (
    <div className={'recipe'}>
      <figure>
        <img src={'./imgs/food-1.jpg'}/>
      </figure>
      <div className={'recipe__details'}>
        <h3>Name of Recipe</h3>
        <p>Posted by</p>
      </div>
    </div>
  )
}

export default Recipe;