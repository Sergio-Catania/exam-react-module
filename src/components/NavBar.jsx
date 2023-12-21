import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;