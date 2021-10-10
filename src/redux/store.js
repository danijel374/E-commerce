import { createStore, applyMiddleware, compose } from "redux";
// import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger];
// applyMiddleware(...logger)

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancer);

export default store;
