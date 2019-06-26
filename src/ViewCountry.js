import React from 'react';

export default function ViewCountry(props) {
  const { dataset, match } = props;
  const selectedArticles = dataset[match.params.country];
  const articleItems = selectedArticles.map(article => (
    <li key={article.title}>{article.title}</li>
  ));
  return (
    <ul>
      {articleItems}
    </ul>
  );
}
