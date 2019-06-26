import React from 'react';

import BarChart from './BarChart';
import RecentNews from './RecentNews';

export default function CountrySummary(props) {
  const { articles } = props;
  return (
    <div className="country-summary">
      <BarChart />
      <RecentNews articles={articles} />
    </div>
  );
}
