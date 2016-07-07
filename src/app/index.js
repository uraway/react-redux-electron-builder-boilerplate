/* global module,process,require */

import React from "react";
import ReactDOM from "react-dom";

let Container;

if (process.env.NODE_ENV === "development") {
  Container = require("react-hot-loader").AppContainer;
} else {
  Container = (props) => {
    return React.Children.only(props.children);
  };
}

const render = () => {
  const Application = require("./application").default;

  ReactDOM.render(
    <Container>
      <Application />
    </Container>,
    document.getElementById("root")
  );
};

if (module.hot) {
  module.hot.accept("./application", render);
}

render();
