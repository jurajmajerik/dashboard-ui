import React from 'react';
import PropTypes from 'prop-types';

import { Route, Switch, Redirect } from 'react-router-dom';

import DataView from './DataView';

export default function Routes(props) {
  const { dataset, filter, latestArticleCountry } = props;
  return (
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/all" />} />
      <Route
        exact
        path="/all"
        render={props => (
          <DataView
            dataset={dataset}
            filter={filter}
            title="All Countries"
            latestArticleCountry={latestArticleCountry}
            {...props}
          />
        )}
      />
      <Route
        exact
        path="/:country"
        render={props => (
          <DataView
            dataset={dataset}
            filter={filter}
            title={props.match.params.country}
            latestArticleCountry={latestArticleCountry}
            {...props}
          />
        )}
      />
    </Switch>
  );
}

Routes.propTypes = {
  dataset: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  latestArticleCountry: PropTypes.string.isRequired,
};
