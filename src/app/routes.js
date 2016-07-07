import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomepageContainer from './containers/HomeContainer';
import ApplicationContainer from './containers/App';

export default (
  <Route path="/" component={ApplicationContainer}>
    <IndexRoute component={HomepageContainer} />
  </Route>
);
