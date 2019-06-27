import React from 'react';

import ArticleRow from './ArticleRow';

export default function ViewCountry(props) {
  const { dataset, match } = props;
  const selectedArticles = dataset[match.params.country];
  const ArticleRows = selectedArticles.map(article => (
    <ArticleRow
      key={article.title}
      title={article.title}
      date={article.date}
    />
  ));
  return (
    <div>
      {ArticleRows}
    </div>
  );
}
