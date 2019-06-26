import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import { articlesData } from './data/articles';

import NavTop from './NavTop';
import BarLive from './BarLive';
import CountriesList from './CountriesList';
import CountrySummary from './CountrySummary';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    this.modifyData();
  }

  modifyData() {
    const { articles } = this.state;
    let i = 0;
    const cycle = (function () {
      setTimeout(() => {
        const newArticles = articles;
        newArticles.push(articlesData[i]);
        this.setState({ articles: newArticles });
        i += 1;
        if (i < 6) {
          cycle();
        }
      }, 500);
    }).bind(this);
    cycle();
  }

  render() {
    const { articles } = this.state;
    return (
      <div className="App">
        <NavTop />
        <BarLive />
        <div className="data-wrapper">
          <CountriesList />
          <CountrySummary articles={articles} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
