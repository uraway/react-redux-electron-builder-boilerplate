/* global module,require */

import { createStore } from "redux";
import rootReducer from "../reducers";

export default (initialState) => {
  const store = createStore(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept("../reducers", () => {
      store.replaceReducer(require("../reducers"));
    });
  }

  return store;
};
