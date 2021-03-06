import React, { Suspense, lazy, Component } from 'react';
import { connect } from 'react-redux';

import '../scss/components/searchbar.scss';
import { getRecipes, setSearchTerm } from '../reduxStore/actions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  componentDidMount() {
    //console.log(this.props);
    this.props.getRecipes('pizza');
  }

  setRecipeSearchTerm = (event) => {
    //console.log(event.target.value);
    document.getElementById('search-ui').firstElementChild.firstElementChild.innerHTML = event.target.value;
  }

  openSearchUI = () => {
    if (window.matchMedia('(max-width: 1024px)').matches) {
      return;
    }
    
    document.getElementById('search-ui').style.display = `block`;
  }

  handleSearch = (event) => {
    if (event.key === 'Enter') {
      document.getElementById('search-ui').style.display = `none`;
      this.props.setSearchTerm(event.target.value);
      this.props.getRecipes(event.target.value);
      document.getElementById('search').blur();
      document.getElementById('search').value = '';
      document.getElementById('search-ui').firstElementChild.firstElementChild.innerHTML = '';
    }
  }

  render() {
    return (
      <div className={'searchbar'}>
        <input id='search' autoComplete="off" placeholder={'Find a recipe'} 
          onClick={this.openSearchUI}
          onKeyDown={this.handleSearch}
          onChange={this.setRecipeSearchTerm}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.recipeReducer
  }
}

export default connect(mapStateToProps, { getRecipes, setSearchTerm })(SearchBar);