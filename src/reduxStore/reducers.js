import {
  GET_RECIPES,
  GET_RECIPES_FAILED,
  GET_RECIPES_PENDING,
  SET_SEARCH_TERM,
  GET_RECIPE_DETAILS,
  GET_RECIPE_DETAILS_PENDING
} from './constants';

const initialState = {
  searchTerm: 'pizza',
  recipes: [],
  error: false,
  count: 0,
  recipeDetails: null,
  recipeClicked: false
}

export const recipeReducer  = (state=initialState, action={}) => {
  switch(action.type) {
    case GET_RECIPES:
      return Object.assign({}, state, {
        recipes: action.payload.recipes,
        count: action.payload.count,
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
    case SET_SEARCH_TERM:
      return Object.assign({}, state, {
        searchTerm: action.payload
    });
    default:
      return state;
  }
}

export const recipeDetailsReducer = (state=initialState, action={}) => {
  switch(action.type) {
    case GET_RECIPES:
      return Object.assign({}, state, {
        recipes: action.payload.recipes,
        count: action.payload.count,
        error: false
      });
    case GET_RECIPE_DETAILS:
      return Object.assign({}, state, {
        recipeDetails: action.payload
    });
    case GET_RECIPE_DETAILS_PENDING:
      return Object.assign({}, state, {
        recipeDetails: null,
        recipeClicked: true
    });
    default:
      return state;
  }
}