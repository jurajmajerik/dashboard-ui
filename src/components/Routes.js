import React from 'react';
import { Route, Switch } from 'react-router-dom';

import ViewAll from './ViewAll';
import ViewCountry from './ViewCountry';

export default function Routes(props) {
  const { dataset } = props;
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <ViewAll dataset={dataset} />}
      />
      <Route
        path="/:country"
        // eslint-disable-next-line no-shadow
        render={props => <ViewCountry dataset={dataset} {...props} />}
      />
    </Switch>
  );
}
