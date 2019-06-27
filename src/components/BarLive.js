import React from 'react';

import LiveText from './LiveText';

export default function BarLive(props) {
  const { article } = props;
  if (!article) return <div className="bar-live">Live Now:</div>;
  const formattedDate = article.date.format('DD MMM HH:mm');
  return (
    <div className="bar-live">
      Live Now:
      <LiveText article={article} />
    </div>
  );
}
