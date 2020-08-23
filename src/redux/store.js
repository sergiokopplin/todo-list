import { applyMiddleware, combineReducers, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import todos from 'redux/reducers';

const logger = createLogger({
  collapsed: true
});

export default (initialState = {}) =>
  createStore(
    combineReducers({ todos }),
    initialState,
    applyMiddleware(logger)
  );
