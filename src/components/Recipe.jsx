import React from 'react';

import '../scss/components/recipe.scss'

const Recipe = ({
  image,
  social_rank,
  title,
  publisher,
  publisher_url,
  id,
  f2f_url,
  source_url
}) => {
  return (
    <div className={'recipe'} id={id}>
      <figure>
        <img src={image}/>
      </figure>
      <div className={'recipe__details'}>
        <h3>{title}</h3>
        <p>{publisher}</p>
      </div>
      <div className={'recipe__socialranking'}>Social rank:<span>{social_rank.toFixed()}</span></div>
    </div>
  )
}

export default Recipe;