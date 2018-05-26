import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import API from "./common/api";
import locations from "./locations/reducer";
import explorer from "./explorer/reducer";
import { fetchLocations } from "./locations/actions";

const reducer = combineReducers({
  locations,
  explorer
});

const middlewares = [thunk.withExtraArgument({ API })];

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  const { createLogger } = require("redux-logger");
  middlewares.push(
    createLogger({
      diff: true
    })
  );
}

const store = createStore(reducer, applyMiddleware(...middlewares));

store.dispatch(fetchLocations());

export default store;
