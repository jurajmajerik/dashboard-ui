import { datasetInit } from '../_data/datasetInit';

import setInitialDates from './setInitialDates';

export function fetchArticles() {
  return setInitialDates(datasetInit);
}

export function fetchNewArticle() {
  return {
    title: '',
    date: null,
    topics: [],
  };
}
