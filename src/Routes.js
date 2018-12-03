import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Home from 'pages/Home';
import Login from 'pages/Login';

export default () => (
  <Switch>
    <Redirect
      exact
      from="/"
      to="/home"
    />
    <Route
      exact
      component={Login}
      path="/login"
    />
    <Route
      exact
      component={Home}
      path="/home"
    />
  </Switch>
);
