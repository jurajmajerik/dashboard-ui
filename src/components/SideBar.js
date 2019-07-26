import React from 'react';
import PropTypes from 'prop-types';

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

SideBar.propTypes = {
  dataset: PropTypes.object.isRequired,
};
