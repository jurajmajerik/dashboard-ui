import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

import NavTop from './NavTop';
import BarLive from './BarLive';
import CountriesList from './CountriesList';
import CountrySummary from './CountrySummary';

function App() {
  return (
    <div className="App">
      <NavTop />
      <BarLive />
      <div className="data-wrapper">
        <CountriesList />
        <CountrySummary />
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
