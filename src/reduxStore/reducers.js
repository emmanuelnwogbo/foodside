import {
  GET_RECIPES,
  GET_RECIPES_FAILED,
  GET_RECIPES_PENDING
} from './constants';

const initialState = {
  searchTerm: 'pizza',
  recipes: [],
  error: false
}

export const recipeReducer  = (state=initialState, action={}) => {
  switch(action.type) {
    case GET_RECIPES:
      return Object.assign({}, state, {
        recipes: action.payload,
        error: false
      });
    case GET_RECIPES_PENDING:
      return Object.assign({}, state, {
        recipes: [],
        error: false
    });
    case GET_RECIPES_FAILED:
      return Object.assign({}, state, {
        recipes: [],
        error: true
    });
    default:
      return state;
  }
}