import React, { Suspense, lazy, Component } from 'react';
import { connect } from 'react-redux';

import '../scss/components/slider.scss'
import { sortRecipeTime } from '../reduxStore/actions';

class Slider extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  changeValue = e => {
    //console.log(e.target.value);
    this.props.sortRecipeTime(e.target.value)
  }
  
  render() {
    return (
      <div className={'slider'}>
        <input
          min={'25'}
          max={'45'} 
          value={`${this.props.state.cookingDuration}`}
          type='range'
          onChange={this.changeValue}></input>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    state: state.recipeReducer
  }
}

export default connect(mapStateToProps, { sortRecipeTime })(Slider);