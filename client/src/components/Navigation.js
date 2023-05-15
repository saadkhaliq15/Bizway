// Navigation.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li className="navigation__item"><Link to="/">Home</Link></li>
        <li className="navigation__item"><Link to="/about">About</Link></li>
        <li className="navigation__item"><Link to="/login">Login</Link></li>
        <li className="navigation__item"><Link to="/signup">Sign Up</Link></li>
        <li className="navigation__item"><Link to="/dashboard">Dashboard</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;
