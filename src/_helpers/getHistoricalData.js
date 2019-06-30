import shuffleArray from 'shuffle-array';
import * as d3 from 'd3';

import { datesHistorical, countHistorical } from '../_data/historicalData';

export default function getHistoricalData() {
  const parseDate = d3.timeParse('%Y%m%d');
  const shuffledCounts = shuffleArray(countHistorical);
  let counter = 0;
  return shuffledCounts.reduce((prevArr, current) => {
    prevArr.push({
      date: parseDate(datesHistorical[counter]),
      count: current,
    });
    counter += 1;
    return prevArr;
  }, []);
}
