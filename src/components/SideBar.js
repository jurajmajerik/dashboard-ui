import React from 'react';

import NavLinksCountries from './NavLinksCountries';
import AllCountriesLink from './AllCountriesLink';

export default function SideBar(props) {
  const { dataset } = props;
  return (
    <div className="sidebar box">
      <AllCountriesLink />
      <NavLinksCountries dataset={dataset} />
    </div>
  );
}
