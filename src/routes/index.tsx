/* React Imports */
import React from 'react';
import { Route, Switch } from 'react-router-dom';

/* Hooks */
import useAuth from '../hooks/useAuth';

/* Routes */
import AuthenticationRoute from './auth.route';
import DashboardRoute from './dashboard.route';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';
import Orphanage from '../pages/Orphanage';
import CreateOrphanage from '../pages/CreateOrphanage';
import SignIn from '../pages/SignIn';


function Routes() {
  const { signed } = useAuth();

  return (
    <Switch>
      {/* DEFAULT ROUTE */}
      <Route path="/" exact component={Landing} />

      {/* APP ROUTE */}
      <Route path="/app" component={OrphanagesMap} />
      <Route path="/orphanages/create" component={CreateOrphanage} />
      <Route path="/orphanages/:id" component={Orphanage} />


      {signed ? <DashboardRoute /> : <AuthenticationRoute />}
    </Switch>
  );
}

export default Routes;
