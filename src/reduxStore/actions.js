import {
  GET_RECIPES,
  GET_RECIPES_FAILED,
  GET_RECIPES_PENDING,
  SET_SEARCH_TERM,
  GET_RECIPE_DETAILS,
  GET_RECIPE_DETAILS_PENDING,
  GET_RECIPE_DETAILS_FAILED
} from './constants';

import { key, proxy } from '../config';

export const getRecipes = (value) => (dispatch) => {
  dispatch({ type: GET_RECIPES_PENDING })
  fetch(`${proxy}http://food2fork.com/api/search?key=${key}&q=${value}`)
    .then(response => response.json())
    .then(data => dispatch({
      type: GET_RECIPES,
      payload: data
    }))
    .catch(error => dispatch({
      type: GET_RECIPES_FAILED,
      payload: error
    }))
}

export const setSearchTerm = (term) => {
  return {
    type: SET_SEARCH_TERM,
    payload: term
  }
}

export const getRecipeDetails = (id, time_to_prepare) => (dispatch) => {
  dispatch({ type: GET_RECIPE_DETAILS_PENDING })
  fetch(`${proxy}http://www.food2fork.com/api/get?key=${key}&rId=${id}`)
    .then(response => response.json())
    .then(data => {
      data.recipe.time_to_prepare = time_to_prepare;
      dispatch({
        type: GET_RECIPE_DETAILS,
        payload: data
      })
    })
    .catch(error => dispatch({
      type: GET_RECIPE_DETAILS_FAILED,
      payload: error
    }))
}