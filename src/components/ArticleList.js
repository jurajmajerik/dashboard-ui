import React from 'react';

import ArticleRow from './ArticleRow';

export default function ArticleList(props) {
  const { articles } = props;
  console.log(articles);
  const articleRows = articles.map(article => (
    <ArticleRow
      key={article.id}
      title={article.title}
      date={article.date}
      topics={article.topics}
    />
  ));
  return (
    <div
      className="article-wrapper box"
      style={{
        height: window.innerHeight - 355,
        maxHeight: window.innerHeight - 355,
      }}
    >
      <div className="article-list-header">
        <div className="first-col-text">Date</div>
        <div>Title</div>
        <div>Topics</div>
        <div>Source</div>
      </div>
      {articleRows}
    </div>
  );
}
