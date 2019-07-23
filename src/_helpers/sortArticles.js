import moment from 'moment';

export default function sortArticles(array) {
  console.log(array);
  return array.sort((a, b) => moment(b.date) - moment(a.date));
}
