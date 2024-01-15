import React from 'react';
import './style/About.css'

const About = () => {
    return (
      <section id="about" className="about-section">
        <div className="about-content">
          <div className="about-image">
            <img src="/img/Build-in-Public.png" alt="About Image" />
          </div>
          <div className="about-text">
            <h2>About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
            {/* Add more text and content as needed */}
          </div>
        </div>
      </section>
    );
  };

export default About;
