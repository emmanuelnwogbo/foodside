import React, { Suspense, lazy, Component } from 'react';
import { connect } from 'react-redux';

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
    if (this.props.state.recipes.length > 0) {
      return this.props.state.recipes.map(recipe => {
        recipe.time_to_prepare = Math.floor(Math.random()*(45-25+1)+25);
        return (
          <Suspense key={recipe.recipe_id} fallback={<div></div>}>
            <Recipe 
              image={recipe.image_url}
              social_rank={recipe.social_rank}
              title={recipe.title}
              publisher={recipe.publisher}
              publisher_url={recipe.publisher_url}
              id={recipe.recipe_id}
              f2f_url={recipe.f2f_url}
              source_url={recipe.source_url}
              time_to_prepare={recipe.time_to_prepare}/>
          </Suspense>
        )
      })
    }
  }

  componentDidMount() {
    console.log(this.props.state)
  }

  render() {
    return (
      <div className={'container__left container__side'}>
        {this.returnRecipeCards()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.recipeReducer
  }
}

export default connect(mapStateToProps)(LeftContainer);