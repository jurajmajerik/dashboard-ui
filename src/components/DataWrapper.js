import React from 'react';

export default function DataWrapper(props) {
  const { children } = props;
  return (
    <div className="outer-wrapper">
      {children}
    </div>
  );
}
