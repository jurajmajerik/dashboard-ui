import React from 'react';

import getAllArticles from '../_helpers/getAllArticles';
import sortArticles from '../_helpers/sortArticles';

import ArticleRow from './ArticleRow';

export default function ViewAll(props) {
  const { dataset } = props;
  const articlesAll = getAllArticles(dataset);
  const articlesAllSorted = sortArticles(articlesAll);
  const ArticleRows = articlesAllSorted.map(article => (
    <ArticleRow
      key={article.title}
      title={article.title}
      date={article.date}
      topics={article.topics}
    />
  ));
  return (
    <div>
      {ArticleRows}
    </div>
  );
}
