import React from 'react';

import NavLinkAll from './NavLinkAll';
import NavLinksCountries from './NavLinksCountries';

export default function CountriesList() {
  return (
    <div className="country-list">
      <ul>
        <NavLinkAll />
        <NavLinksCountries />
      </ul>
    </div>
  );
}
