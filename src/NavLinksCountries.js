import React from 'react';
import { NavLink } from 'react-router-dom';

import { dataset } from './data/dataset';

export default function NavLinksCountries() {
  const countries = Object.keys(dataset);
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
