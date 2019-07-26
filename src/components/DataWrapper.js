import React from 'react';
import PropTypes from 'prop-types';

export default function DataWrapper(props) {
  const { children } = props;
  return (
    <div className="outer-wrapper">
      {children}
    </div>
  );
}

DataWrapper.propTypes = {
  children: PropTypes.array.isRequired,
};
