import React from 'react';

export default function ViewCountry(props) {
  const { dataset, match } = props;
  const selectedArticles = dataset[match.params.country];
  const ArticleRows = selectedArticles.map(article => (
    <li key={article.title}>{article.title}</li>
  ));
  return (
    <ul>
      {ArticleRows}
    </ul>
  );
}
