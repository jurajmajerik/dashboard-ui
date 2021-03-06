import React from 'react';
import PropTypes from 'prop-types';

export default function NavTop(props) {
  const { filter, onFilterChange } = props;
  return (
    <div className="nav-top box">
      <div className="logo">
        REAL-TIME
        &nbsp;
        <span style={{ color: 'rgb(61, 106, 141)' }}>
        UI
        </span>
      </div>
      <div className="select-wrapper">
        <div className="filter-label">
          Filter&nbsp;&nbsp;
          <i style={{ fontSize: '10px' }} className="fas fa-chevron-right" />
        </div>
        <div>
          <select className="filter-select" value={filter} onChange={onFilterChange}>
            <option value="all">All Topics</option>
            <option value="1">Politics</option>
            <option value="2">Markets</option>
            <option value="3">Business</option>
            <option value="4">Security</option>
            <option value="5">Culture</option>
            <option value="6">Sport</option>
            <option value="7">Crime</option>
          </select>
        </div>
      </div>
    </div>
  );
}

NavTop.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
