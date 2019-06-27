import React from 'react';

export default function BarLive(props) {
  const { article } = props;
  if (!article) return null;
  const formattedDate = article.date.format('DD MMM HH:mm');
  return (
    <div className="bar-live">
      Live Now:
      &nbsp;&nbsp;
      {article.title}
      &nbsp;&nbsp;|&nbsp;&nbsp;
      {formattedDate}
    </div>
  );
}
