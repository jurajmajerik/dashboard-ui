import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import DataView from './DataView';

export default function Routes(props) {
  const { dataset, filter } = props;
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/all" />} />
      <Route
        exact
        path="/all"
        // eslint-disable-next-line no-shadow
        render={props => (
          <DataView
            dataset={dataset}
            filter={filter}
            title="All Countries"
            {...props}
          />
        )}
      />
      <Route
        path="/:country"
        // eslint-disable-next-line no-shadow
        render={props => (
          <DataView
            dataset={dataset}
            filter={filter}
            title={props.match.params.country}
            {...props}
          />
        )}
      />
    </Switch>
  );
}
