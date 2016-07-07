import React from "react";
import routes from "./routes";
import { Provider } from "react-redux";
import configureStore from "./store";
import { Router, hashHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";

const store   = configureStore(),
      history = syncHistoryWithStore(hashHistory, store);

class Application extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history} routes={routes} />
      </Provider>
    );
  }
}

export default Application;
