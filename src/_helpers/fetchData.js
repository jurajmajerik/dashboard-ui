import { datasetInit } from '../_data/datasetInit';

import setInitialDates from './setInitialDates';

export default function fetchData() {
  return setInitialDates(datasetInit);
}
