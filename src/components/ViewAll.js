import React from 'react';

import getAllArticles from '../_helpers/getAllArticles';
import sortArticles from '../_helpers/sortArticles';

import ArticleRow from './ArticleRow';
import BarChart from './BarChart';

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
      <BarChart />
      <div
        className="article-wrapper box"
        style={{
          height: window.innerHeight - 355,
          maxHeight: window.innerHeight - 355,
        }}
      >
        {ArticleRows}
      </div>
    </div>
  );
}
