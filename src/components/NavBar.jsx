import { Link } from 'react-router-dom';
import React from 'react';
import SearchBar from './SearchBar';

const NavBar = () => {
  return (
    <nav id="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/search">Search</Link></li>
      </ul>
      <SearchBar/>
    </nav>
  );
};

export default NavBar;