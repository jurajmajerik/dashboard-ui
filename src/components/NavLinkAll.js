import React from 'react';
import { NavLink } from 'react-router-dom';

export default function CountriesList() {
  return (
    <div className="navlink-wrapper">
      <NavLink key={1} to="/" activeClassName="sidebar-active">
          All
      </NavLink>
    </div>
  );
}
