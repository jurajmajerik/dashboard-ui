import shuffleArray from 'shuffle-array';

import { datesHistorical, countHistorical } from '../_data/historicalData';

export default function getHistoricalData() {
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
