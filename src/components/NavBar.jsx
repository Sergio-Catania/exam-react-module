import { Link } from 'react-router-dom';
import React from 'react';

const NavBar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li className="navbar-item"><Link to="/">Home</Link></li>
        <li className="navbar-item"><Link to="/about">About</Link></li>
        <li className="navbar-item"><Link to="/search">Search</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;