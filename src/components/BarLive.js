import React from 'react';

import LiveText from './LiveText';

export default function BarLive(props) {
  const { article } = props;
  return (
    <div className="bar-live box">
      <div className="live-text">
        <div className="led"><i className="fas fa-circle" /></div>
        <div>LIVE NOW:</div>
        <LiveText article={article} />
      </div>
      <div style={{ textAlign: 'right' }}>
      </div>
    </div>
  );
}
