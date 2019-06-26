import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import './styles.css';

import fetchData from './fetchData';
import articleAdder from './articleAdder';

import NavTop from './NavTop';
import BarLive from './BarLive';
import CountriesList from './CountriesList';

import ViewAll from './ViewAll';
import ViewCountry from './ViewCountry';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataset: fetchData() };
  }

  componentDidMount() {
    const i = 0;
    const cycle = articleAdder.bind(this);
    cycle(i);
  }

  render() {
    const { dataset } = this.state;
    return (
      <div className="App">
        <NavTop />
        <BarLive />
        <Router history={history}>
          <div className="data-wrapper">
            <CountriesList />
            <Switch>
              <Route
                exact
                path="/"
                render={() => <ViewAll dataset={dataset} />}
              />
              <Route
                path="/country/:country"
                render={props => <ViewCountry dataset={dataset} {...props} />}
              />
            </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
