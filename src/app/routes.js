import React from 'react';
import { Route, IndexRoute } from 'react-router';
import HomepageContainer from './containers/homepage';
import ApplicationContainer from './containers/application';

export default (
  <Route path='/' component={ApplicationContainer}>
    <IndexRoute component={HomepageContainer} />
  </Route>
);
