import React from 'react';
import ArticleRow from './ArticleRow';

export default function ViewAll(props) {
  const { dataset } = props;
  const countries = Object.keys(dataset);
  const articlesAll = countries.reduce((prevArr, country) => {
    return prevArr.concat(dataset[country]);
  }, []);
  const ArticleRows = articlesAll.map(article => (
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
