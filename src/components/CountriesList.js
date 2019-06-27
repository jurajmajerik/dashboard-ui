import React from 'react';

import NavLinkAll from './NavLinkAll';
import NavLinksCountries from './NavLinksCountries';

export default function CountriesList(props) {
  const { dataset } = props;
  return (
    <div className="country-list">
      <NavLinkAll />
      <NavLinksCountries dataset={dataset} />
    </div>
  );
}
