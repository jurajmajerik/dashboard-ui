import React from 'react';
import moment from 'moment';

import { topicsConfig } from '../_data/topics';

export default function ArticleRow(props) {
  const { title, date, topics } = props;
  const formattedDate = moment(date).format('DD MMM HH:mm');
  const topicsString = topics.reduce((prevStr, current) => (
    `${prevStr}${topicsConfig[current]}, `
  ), '');

  return (
    <div className="article-item">
      <div className="text-darker">{formattedDate}</div>
      <div>{title}</div>
      <div>{topicsString}</div>
      <div>www.google.com</div>
    </div>
  );
}
