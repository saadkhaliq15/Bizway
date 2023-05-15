// HomePage.js

import React from 'react';
import Navigation from './Navigation';
import './Styles/HomePage.css';  

function HomePage() {
  return (
    <div className="home">
      <Navigation />
      <header className="home__header">
        <h1 className="home__title">Bizway</h1>
        <p className="home__subtitle">Welcome to The New Era of Business</p>
        <button className="home__cta">Get Started</button>
      </header>
      <section className="home__section">
        <h2 className="home__section-title">Section Title</h2>
        <p className="home__section-description">Section description...</p>
      </section>
      {/* Repeat above section as needed for each section of your page */}
      <footer className="home__footer">
        {/* Include any footer information or components here */}
      </footer>
    </div>
  );
}

export default HomePage;
