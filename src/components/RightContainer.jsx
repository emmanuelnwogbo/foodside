import React, { Suspense, lazy, Component } from 'react';
import { connect } from 'react-redux';

import '../scss/components/container.scss'

class RightContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  renderIngredients = () => {
    return this.props.state.recipeDetails.recipe.ingredients.map(ingredient => {
      return (
        <div className={'container__right__ingredients--ingredient'} key={this.props.state.recipeDetails.recipe.ingredients.indexOf(ingredient)}>
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
    console.log(this.props)
  }

  render() {
    if (this.props.state.recipeDetails === null) {
      return (
        <div className={'container__right container__side'}>
          
        </div>
      )
    }

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
            {this.renderIngredients()}
          </div>
        </div>
        <div className={'container__right__socialrank'}>{this.props.state.recipeDetails.recipe.social_rank.toFixed()}</div>
        <div className={'container__right__timetoprepare'}>{this.props.state.recipeDetails.recipe.time_to_prepare} mins to prepare</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.recipeDetailsReducer
  }
}

export default connect(mapStateToProps)(RightContainer);