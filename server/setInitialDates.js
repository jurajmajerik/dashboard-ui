import moment from 'moment';

export default function setInitialDates(dataset) {
  const newDataset = dataset;
  let counter = 1;
  newDataset.forEach((article, i) => {
    newDataset[i].date = moment().subtract(counter, 'minutes');
    counter += 1;
  });

  return newDataset;
}
