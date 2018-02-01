import { applyMiddleware, createStore } from 'redux';
import rootReducer from './reducers/index.js';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

let middleware = [
  logger,
  thunkMiddleware
];

export default(initialState) => {
    return createStore(
      rootReducer,
      applyMiddleware(...middleware)
    );
}
