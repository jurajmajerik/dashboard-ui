import moment from 'moment';

export default function setInitialDates(dataset) {
  const newDataset = dataset;
  const countries = Object.keys(dataset);
  let counter = 1;
  countries.forEach((country) => {
    dataset[country].forEach((article, i) => {
      newDataset[country][i].date = moment().subtract(counter, 'minutes');
      counter += 1;
    });
  });
  return newDataset;
}
