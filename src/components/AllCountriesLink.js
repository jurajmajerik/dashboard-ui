import React from 'react';
import { NavLink } from 'react-router-dom';

export default function AllCountriesLink() {
  return (
    <NavLink
      className="navlink-wrapper country-nav-item"
      to="/"
      activeClassName="sidebar-active"
      style={{
        borderTopLeftRadius: '3px',
        borderTopRightRadius: '3px',
      }}
    >
      <div />
      <div style={{
        marginLeft: '12px',
      }}
      >
        All Countries
      </div>
    </NavLink>
  );
}
