import moment from 'moment';

export default function sortArticles(array) {
  return array.sort((a, b) => moment(b.date) - moment(a.date));
}
