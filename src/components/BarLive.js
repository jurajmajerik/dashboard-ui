import React from 'react';

import LiveText from './LiveText';

export default function BarLive(props) {
  const { article } = props;
  return (
    <div className="bar-live box">
      Live Now:
      <LiveText article={article} />
    </div>
  );
}
