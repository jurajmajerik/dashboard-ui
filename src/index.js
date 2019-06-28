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
    };
  }

  componentDidMount() {
    const i = 0;
    const cycle = articleAdder.bind(this);
    cycle(i);
  }

  render() {
    const { dataset, newArticle } = this.state;
    return (
      <div className="App">
        <NavTop />
        <BarLive article={newArticle} />
        <Router history={history}>
          <DataWrapper>
            <SideBar dataset={dataset} />
            <Routes dataset={dataset} />
          </DataWrapper>
        </Router>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
