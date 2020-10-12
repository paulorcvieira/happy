import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';

import Landing from '../pages/Landing';
import OrphanagesMap from '../pages/OrphanagesMap';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/orfanatos" exact component={OrphanagesMap} />
      <Route path="*" exact component={Landing} />

      {/* <Route path="/dashboard" component={Dashboard} isPrivate /> */}
    </Switch>
  );
};

export default Routes;
