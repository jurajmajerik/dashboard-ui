import shuffleArray from 'shuffle-array';

import { datesHistorical, countHistoricalAll, countHistoricalCountry } from '../_data/historicalData';

export default function getHistoricalData(title) {
  let countHistorical;
  if (title === 'All Countries') countHistorical = countHistoricalAll;
  else countHistorical = countHistoricalCountry;

  const shuffledCounts = shuffleArray(countHistorical);
  let counter = 0;
  return shuffledCounts.reduce((prevArr, current) => {
    prevArr.push({
      date: datesHistorical[counter],
      count: current,
    });
    counter += 1;
    return prevArr;
  }, []);
}
