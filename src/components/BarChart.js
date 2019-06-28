import React from 'react';

import CountryTitle from './CountryTitle';

export default function BarChart(props) {
  const { country } = props;
  return (
    <div className="bar-chart box">
      <CountryTitle country={country} />
    </div>
  );
}
