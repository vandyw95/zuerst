import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';

export default props => (
  <Switch>
    <Redirect
      exact
      from="/"
      to="/home"
    />
    <Route
      exact
      component={() => <Login rootProps={props} />}
      path="/login"
    />
    <Route
      exact
      component={() => <Home rootProps={props} />}
      path="/home"
    />
  </Switch>
);
