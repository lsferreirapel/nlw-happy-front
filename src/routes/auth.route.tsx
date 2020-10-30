import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';

export default function DashboardRoute() {
  return (
    <Switch>
      <Route path="/login" exact component={SignIn} />
      {/* <Route path="/login/password/reset" component={} /> */}
    </Switch>
  );
}
