import React from 'react';

import ArticleRow from './ArticleRow';
import BarChart from './BarChart';

export default function ViewCountry(props) {
  const { dataset, match } = props;
  const selectedArticles = dataset[match.params.country];
  const ArticleRows = selectedArticles.map(article => (
    <ArticleRow
      key={article.title}
      title={article.title}
      date={article.date}
      topics={article.topics}
    />
  ));
  return (
    <div>
      <BarChart data={
        [1, 2, 3, 4, 8, 4, 5, 10, 12, 13, 7, 9, 4, 12, 16, 9, 2, 3, 4, 8, 4, 5, 9, 4, 12, 16, 9, 2]
      }
      />
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
