import React from 'react';
import './style/Home.css'

const Home = () => {
  return (
    <section id="Home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>Welcome to Our Token Landing Page</h1>
          <p>Your go-to source for all information about our token.</p>
        </div>
        <div className="home-image">
          <img src="/img/Build-in-Public.png" alt="Token Image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
