import React from 'react';

export default function CountryTitle(props) {
  const { country } = props;
  return (
    <div className="country-title">
      {country || 'All Countries'}
    </div>
  );
}
