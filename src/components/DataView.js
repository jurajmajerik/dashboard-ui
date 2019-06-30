import React from 'react';

import getAllArticles from '../_helpers/getAllArticles';
import sortArticles from '../_helpers/sortArticles';

import ArticleList from './ArticleList';
import BarChart from './BarChart';

export default function DataView(props) {
  const { dataset, match, filter } = props;

  let articles;
  let title;

  if (match.params.hasOwnProperty('country')) {
    articles = dataset[match.params.country];
    title = match.params.country;
  } else {
    articles = sortArticles(getAllArticles(dataset, filter));
    title = 'All Countries';
  }

  return (
    <div>
      <BarChart title={title} />
      <ArticleList articles={articles} />
    </div>
  );
}
