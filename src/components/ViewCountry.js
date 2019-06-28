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
      <BarChart country={match.params.country} />
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
