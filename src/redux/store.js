import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

// const middlewares = [logger];
// applyMiddleware(...logger)

// function logger({ getState }) {
//   return (next) => (action) => {
//     console.log("will dispatch", action);
//     // Call the next dispatch method in the middleware chain.    const returnValue = next(action)
//     console.log("state after dispatch", getState());
//     // This will likely be the action itself, unless    // a middleware further in chain changed it.    return returnValue
//   };
// }

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;
