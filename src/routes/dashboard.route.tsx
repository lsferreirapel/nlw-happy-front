import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';

export default function DashboardRoute() {
  return (
    <Switch>
      <Route path="/login" exact component={Dashboard} />
    </Switch>
  );
}
