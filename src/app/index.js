import React from 'react';
import ReactDOM from 'react-dom';

let Container;

if (process.env.NODE_ENV === 'development') {
  Container = require('react-hot-loader').AppContainer; // eslint-disable-line global-require
} else {
  Container = (props) => {
    return React.Children.only(props.children);
  };
}

const render = () => {
  const Application = require('./application').default; // eslint-disable-line global-require

  ReactDOM.render(
    <Container>
      <Application />
    </Container>,
    document.getElementById('root')
  );
};

if (module.hot) {
  module.hot.accept('./application', render);
}

render();
