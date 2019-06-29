import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import './styles.css';
import './dashboard.css';

import history from './_helpers/history';
import { fetchArticles, fetchNewArticle } from './_helpers/fetchData';
import articleAdder from './_helpers/articleAdder';

import NavTop from './components/NavTop';
import BarLive from './components/BarLive';
import SideBar from './components/SideBar';
import DataWrapper from './components/DataWrapper';
import Routes from './components/Routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: fetchArticles(),
      newArticle: fetchNewArticle(),
      filter: 'all',
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  componentDidMount() {
    const i = 0;
    const cycle = articleAdder.bind(this);
    cycle(i);
  }

  handleFilterChange(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    const { dataset, newArticle, filter } = this.state;
    return (
      <div className="App">
        <NavTop filter={filter} onFilterChange={this.handleFilterChange} />
        <BarLive article={newArticle} />
        <Router history={history}>
          <DataWrapper>
            <SideBar dataset={dataset} />
            <Routes dataset={dataset} filter={filter} />
          </DataWrapper>
        </Router>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
