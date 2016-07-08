import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomeContainer from './containers/HomeContainer';
import App from './containers/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeContainer} />
  </Route>
);
