import React from 'react';

export default function RecentNews(props) {
  const { articles } = props;
  const articlesListItems = articles.map(article => (
    <li key={article.title}>{article.title}</li>));
  return (
    <div className="recent-news">
      Recent News
      <ul>
        {articlesListItems}
      </ul>
    </div>
  );
}
