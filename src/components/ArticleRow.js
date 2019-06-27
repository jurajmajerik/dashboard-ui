import React from 'react';
import moment from 'moment';

export default function ArticleRow(props) {
  const { title, date } = props;
  const formattedDate = moment(date).format('DD MMM HH:mm');

  return (
    <div className="article-item">
      <div>{formattedDate}</div>
      <div>{title}</div>
      <div>Category1, Category2</div>
      <div>www.google.com</div>
    </div>
  );
}
