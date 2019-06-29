import React from 'react';

import getAllArticles from '../_helpers/getAllArticles';
import sortArticles from '../_helpers/sortArticles';

import ArticleList from './ArticleList';
import BarChart from './BarChart';

export default function DataView(props) {
  const { dataset, match, countryView, title, filter } = props;
  const articles = countryView === true
    ? dataset[match.params.country]
    : sortArticles(getAllArticles(dataset, filter));
  return (
    <div>
      <BarChart title={title} />
      <ArticleList articles={articles} />
    </div>
  );
}
