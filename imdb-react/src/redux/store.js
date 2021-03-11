import {applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import isSearchReducer from './IsSearchReducer.js';
import logger from 'redux-logger';

const middlewares = [thunk,logger];

const store = createStore(isSearchReducer,applyMiddleware(...middlewares));

export default store;