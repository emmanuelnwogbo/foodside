import React, { Suspense, lazy, Component } from 'react';
import { connect } from 'react-redux';

import '../scss/components/searchbar.scss';
import { getRecipes } from '../reduxStore/actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    //console.log(this.props);
    this.props.getRecipes('pizza')
  }

  render() {
    return (
      <div className={'searchbar'}>
        <input placeholder={'Find a recipe'}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.recipeReducer
  }
}

export default connect(mapStateToProps, { getRecipes })(SearchBar);