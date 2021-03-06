import React from 'react';
import PropTypes from 'prop-types';

import ArticleRow from './ArticleRow';

export default function ArticleList(props) {
  const { articles } = props;
  const articleRows = articles.map(article => (
    <ArticleRow
      key={article.id}
      title={article.title}
      date={article.date}
      topics={article.topics}
    />
  ));
  return (
    <div className="box">
      <div className="article-list-header">
        <div className="first-col-text">Date</div>
        <div>Title</div>
        <div>Topics</div>
        <div>Source</div>
      </div>

      <div
        className="article-wrapper"
        style={{
          height: window.innerHeight - 355,
          maxHeight: window.innerHeight - 355,
        }}
      >
        {articleRows}
      </div>
    </div>
  );
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};
