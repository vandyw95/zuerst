import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'pages/Home';

export default () => (
  <Switch>
    <Redirect
      exact
      from="/"
      to="/home"
    />
    <Route
      exact
      path="/home"
      component={Home}
    />
  </Switch>
);
