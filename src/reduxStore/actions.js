import {
  GET_RECIPES,
  GET_RECIPES_FAILED,
  GET_RECIPES_PENDING
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