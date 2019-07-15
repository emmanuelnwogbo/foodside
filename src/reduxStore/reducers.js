import {
  GET_RECIPES,
  GET_RECIPES_FAILED,
  GET_RECIPES_PENDING,
  SET_SEARCH_TERM,
  GET_RECIPE_DETAILS,
  GET_RECIPE_DETAILS_PENDING,
  SET_CURRENT_RECIPE_ID,
  SET_RECIPE_COOK_DURATION
} from './constants';

const initialState = {
  searchTerm: 'pizza',
  recipes: [],
  error: false,
  count: 0,
  recipeDetails: null,
  recipeClicked: false,
  currentRecipeId: null,
  initialRecipe: null,
  cookingDuration: '45'
}

export const recipeReducer  = (state=initialState, action={}) => {
  switch(action.type) {
    case GET_RECIPES:
      return Object.assign({}, state, {
        recipes: action.payload.recipes,
        count: action.payload.count,
        error: action.payload.error ? "limit" : undefined,
        initialRecipe: action.payload.recipes ? action.payload.recipes[0] : null,
        recipeClicked: false
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
    case GET_RECIPE_DETAILS:
      return Object.assign({}, state, {
        recipeDetails: action.payload
    });
    case SET_CURRENT_RECIPE_ID:
      return Object.assign({}, state, {
        currentRecipeId: action.payload
    });
    case SET_RECIPE_COOK_DURATION:
      return Object.assign({}, state, {
        cookingDuration: action.payload
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
        error: action.payload.error ? "limit" : undefined,
        initialRecipe: action.payload.recipes ? action.payload.recipes[0] : null,
        recipeClicked: false
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
    case SET_CURRENT_RECIPE_ID:
      return Object.assign({}, state, {
        currentRecipeId: action.payload
    });
    case SET_SEARCH_TERM:
      return Object.assign({}, state, {
        searchTerm: action.payload
    });
    case SET_RECIPE_COOK_DURATION:
      return Object.assign({}, state, {
        cookingDuration: action.payload
    });
    default:
      return state;
  }
}