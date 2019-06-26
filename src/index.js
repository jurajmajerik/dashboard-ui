import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import './styles.css';

import { dataset } from './data/dataset';

import NavTop from './NavTop';
import BarLive from './BarLive';
import CountriesList from './CountriesList';

import ViewAll from './ViewAll';
import ViewCountry from './ViewCountry';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  // componentDidMount() {
  //   this.modifyData();
  // }

  // modifyData() {
  //   const { articles } = this.state;
  //   let i = 0;
  //   const cycle = (function () {
  //     setTimeout(() => {
  //       const newArticles = articles;
  //       newArticles.push(articlesData[i]);
  //       this.setState({ articles: newArticles });
  //       i += 1;
  //       if (i < 6) {
  //         cycle();
  //       }
  //     }, 500);
  //   }).bind(this);
  //   cycle();
  // }

  render() {
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
