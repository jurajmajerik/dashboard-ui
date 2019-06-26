import React from 'react';

import BarChart from './BarChart';
import RecentNews from './RecentNews';

export default function CountrySummary() {
  return (
    <div className="country-summary">
      <BarChart />
      <RecentNews />
    </div>
  );
}
