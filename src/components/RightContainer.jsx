import React, { Suspense, lazy, Component } from 'react';
import { connect } from 'react-redux';

import '../scss/components/container.scss'
import { getRecipeDetails } from '../reduxStore/actions';

class RightContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  returnDetails = () => {

  }

  initialRecipeDetails = () => {
    if (this.props.state.recipes.length > 0) {
      const recipe = this.props.state.recipes[0];
      this.props.getRecipeDetails(recipe.recipe_id, Math.floor(Math.random()*(45-25+1)+25));
    }
  }

  renderIngredients = (recipe) => {
    return recipe.ingredients.map(ingredient => {
      return (
        <div className={'container__right__ingredients--ingredient'} key={recipe.ingredients.indexOf(ingredient)}>
          <span>
            <svg className={'container__right__ingredients--ingredient-svg'}>
              <use xlinkHref="./imgs/sprite.svg#icon-magnifying-glass"/>
            </svg>
          </span>
          <span>{ingredient}</span>
        </div>
      )
    })
  }

  componentDidMount() {
    console.log(this.props, 'right container');
  }

  render() {
    if (this.props.state.error === 'limit') {
      return <div className={'container__right--error container__side'}></div>
    }

    if (this.props.state.recipeDetails === null) {
      return (
        <div className={'container__right container__side'}>
          <div style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}>
            <span className={'loading-svg'}>
              <svg>
                <use xlinkHref="./imgs/sprite.svg#icon-ccw"/>
              </svg>
            </span>
          </div>
        </div>
      )      
    }

    if (this.props.state.recipeDetails !== null) {
      return (
        <div className={'container__right container__side'}>
          <figure>
            <img src={this.props.state.recipeDetails.recipe.image_url}/>
          </figure>
          <h2>{this.props.state.recipeDetails.recipe.title}</h2>
          <h3>By {this.props.state.recipeDetails.recipe.publisher}</h3>
          <div className={'container__right__ingredients'}>
            <h4>Ingredients</h4>
            <div className={'container__right__ingredients--content'}>
              {this.renderIngredients(this.props.state.recipeDetails.recipe)}
            </div>
          </div>
          <div className={'container__right__socialrank'}>{this.props.state.recipeDetails.recipe.social_rank.toFixed()}</div>
          <div className={'container__right__timetoprepare'}>{this.props.state.recipeDetails.recipe.time_to_prepare} mins to prepare</div>
        </div>
      )      
    }
  }
}

function mapStateToProps(state) {
  return {
    state: state.recipeDetailsReducer
  }
}

export default connect(mapStateToProps, { getRecipeDetails })(RightContainer);