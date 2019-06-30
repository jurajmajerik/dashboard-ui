import React from 'react';

import getAllArticles from '../_helpers/getAllArticles';
import sortArticles from '../_helpers/sortArticles';
import getArticlesForCountry from '../_helpers/getArticlesForCountry';

import ArticleList from './ArticleList';
import BarChart from './BarChart';

export default function DataView(props) {
  const { dataset, match, filter, latestArticleCountry } = props;

  let articles;
  let title;

  if (match.params.hasOwnProperty('country')) {
    const { country } = match.params;
    title = country;
    articles = getArticlesForCountry(dataset, country, filter);
  } else {
    title = 'All Countries';
    articles = sortArticles(getAllArticles(dataset, filter));
  }

  return (
    <div>
      <BarChart title={title} latestArticleCountry={latestArticleCountry} />
      <ArticleList articles={articles} />
    </div>
  );
}
