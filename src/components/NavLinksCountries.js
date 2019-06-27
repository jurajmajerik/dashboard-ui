import React from 'react';
import { NavLink } from 'react-router-dom';

import { datasetInit } from '../_data/datasetInit';

export default function NavLinksCountries() {
  const countries = Object.keys(datasetInit);
  const items = countries.map(country => (
    <li key={country}>
      <NavLink key={country} to={`/country/${country}`} activeClassName="sidebar-active">
        {country}
      </NavLink>
    </li>
  ));
  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  );
}
