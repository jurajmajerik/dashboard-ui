import React from 'react';

export default function ViewAll(props) {
  const { dataset } = props;
  const countries = Object.keys(dataset);
  const articlesAll = countries.reduce((prevArr, country) => {
    return prevArr.concat(dataset[country]);
  }, []);
  const articleItems = articlesAll.map(article => (
    <li key={article.title}>{article.title}</li>
  ));
  return (
    <ul>
      {articleItems}
    </ul>
  );
}
