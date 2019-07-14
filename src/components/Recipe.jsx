import React from 'react';
import { connect } from 'react-redux';

import '../scss/components/recipe.scss'
import { getRecipeDetails, setCurrentRecipeId } from '../reduxStore/actions';

const Recipe = ({
  image,
  social_rank,
  title,
  publisher,
  publisher_url,
  id,
  f2f_url,
  source_url,
  getRecipeDetails,
  setCurrentRecipeId,
  time_to_prepare,
  state
}) => {
  console.log(state);
  const handleRecipeClick = () => {
    if (state.currentRecipeId === id) {
      return;
    }
    
    getRecipeDetails(id, time_to_prepare);
    setCurrentRecipeId(id);
  }

  return (
    <div className={'recipe'} id={id} onClick={handleRecipeClick}>
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

function mapStateToProps(state) {
  return {
    state: state.recipeDetailsReducer
  }
}

export default connect(mapStateToProps, { getRecipeDetails, setCurrentRecipeId })(Recipe);