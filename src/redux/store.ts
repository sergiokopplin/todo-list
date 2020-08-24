import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import todos from "./reducers";

const logger = createLogger({ collapsed: true });

const store = (initialState = {}) =>
  createStore(
    combineReducers({ todos }),
    initialState,
    applyMiddleware(logger)
  );

export default store;
