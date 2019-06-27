import React from 'react';
import { NavLink } from 'react-router-dom';

import getSortedCountries from '../_helpers/getSortedCountries';

export default function NavLinksCountries(props) {
  const { dataset } = props;
  const items = getSortedCountries(dataset).map((country, i) => (
    <div key={country}>
      <NavLink key={country} to={`/${country}`} activeClassName="sidebar-active">
        {i + 1}
        &nbsp;
        {country}
      </NavLink>
    </div>
  ));
  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  );
}
