import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import recipeReducer from './reduxStore';

const logger = createLogger();

const rootReducer = combineReducers({
  recipeReducer
});

const store = createStore(
  rootReducer, 
  applyMiddleware(thunkMiddleware, logger))

import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById("app"));
