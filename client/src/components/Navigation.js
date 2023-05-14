import React from 'react';
import './Styles/Navigation.css';

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li className="navigation__item"><a href="/">Home</a></li>
        <li className="navigation__item"><a href="/login">Login</a></li>
        <li className="navigation__item"><a href="/signup">Sign Up</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
