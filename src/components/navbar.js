// NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css'; // Import your CSS file for styling

const NavBar = () => {
  return (
    <nav className="bottom-nav-bar">
      <NavLink to="/start" activeClassName="active-nav-item">
        Start
      </NavLink>
      <NavLink to="/farm" activeClassName="active-nav-item">
        Farm
      </NavLink>
      <NavLink to="/earn" activeClassName="active-nav-item">
        Earn
      </NavLink>
      <NavLink to="/friends" activeClassName="active-nav-item">
        Friends
      </NavLink>
    </nav>
  );
};

export default NavBar;
