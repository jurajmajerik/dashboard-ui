import React from 'react';
import PropTypes from 'prop-types';

import getSortedCountries from '../_helpers/getSortedCountries';

import CountryNavItem from './CountryNavItem';

export default function NavLinksCountries(props) {
  const { dataset } = props;
  const items = getSortedCountries(dataset).map((country, i) => (
    <CountryNavItem key={country} country={country} rank={i + 1} />
  ));
  return (
    <React.Fragment>
      {items}
    </React.Fragment>
  );
}

NavLinksCountries.propTypes = {
  dataset: PropTypes.object.isRequired,
};
