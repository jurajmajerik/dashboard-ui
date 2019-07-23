import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router-dom';
import cloneDeep from 'clone-deep';
import './styles.css';
import './dashboard.css';

import history from './_helpers/history';
import { fetchArticles, fetchNewArticle } from './_helpers/fetchData';
import { datasetInit } from './_data/datasetInit';

import NavTop from './components/NavTop';
import BarLive from './components/BarLive';
import SideBar from './components/SideBar';
import DataWrapper from './components/DataWrapper';
import Routes from './components/Routes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataset: datasetInit,
      newArticle: fetchNewArticle(),
      filter: 'all',
      latestArticleCountry: 'United Kingdom',
    };
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleResetDB = this.handleResetDB.bind(this);
  }

  componentDidMount() {
    fetch('/api/articles')
      .then(response => response.json())
      .then((articles) => {
        const dataset = cloneDeep(datasetInit);
        articles.forEach((article) => {
          dataset[article.country].push(article);
        });
        this.setState({ dataset });
      });

    const socket = io();
    socket.on('new_article', (data) => {
      if (data.type === 'add') {
        const newArticle = data.new_val;
        const newDataset = Object.assign({}, this.state.dataset);
        newDataset[newArticle.country].unshift(newArticle);
        this.setState({ dataset: newDataset, newArticle });
      }
    });

    socket.on('db_reset', () => {
      this.handleResetDB();
    });
  }

  handleResetDB() {
    fetch('/api/articles')
      .then(response => response.json())
      .then((articles) => {
        const dataset = cloneDeep(datasetInit);
        articles.forEach((article) => {
          dataset[article.country].push(article);
        });
        this.setState({ dataset });
      });
  }

  handleFilterChange(event) {
    this.setState({ filter: event.target.value });
  }

  render() {
    const { dataset, newArticle, filter, latestArticleCountry } = this.state;
    return (
      <div className="App">
        <NavTop filter={filter} onFilterChange={this.handleFilterChange} />
        <BarLive article={newArticle} />
        <Router history={history}>
          <DataWrapper>
            <SideBar dataset={dataset} />
            <Routes dataset={dataset} filter={filter} latestArticleCountry={latestArticleCountry} />
          </DataWrapper>
        </Router>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
