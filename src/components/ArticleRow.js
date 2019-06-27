import React from 'react';

export default function ArticleRow(props) {
  const { title, date } = props;
  return (
    <div className="article-item">
      <div>{date.toLocaleDateString('en-GB')}</div>
      <div>{title}</div>
      <div>Category1, Category2</div>
      <div>www.google.com</div>
    </div>
  );
}
