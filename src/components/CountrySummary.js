import React from 'react';

import BarChart from './BarChart';
import RecentNews from './RecentNews';

export default function CountrySummary(props) {
  return (
    <div className="country-summary">
      <BarChart />
      <RecentNews />
    </div>
  );
}
