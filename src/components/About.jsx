import React from 'react';
import './style/About.css'

const About = () => {
    return (
      <section id="About" className="about-section">
        <div className="about-content">
        <div className="about-section-box">
            <div className="about-box-content">
                <h3 className="about-box-heading">About</h3>
                <p className="about-box-description">
                    Download MetaMask or your preferred wallet from the app store or Google Play Store. Desktop users can download the Google Chrome extension from metamask.io.
                </p>
            </div>
      </div>
      <div className="about-section-box">
            <div className="about-box-content">
                <h3 className="about-box-heading">Contact</h3>
                <p className="about-box-description">
                    Download MetaMask or your preferred wallet from the app store or Google Play Store. Desktop users can download the Google Chrome extension from metamask.io.
                </p>
            </div>
      </div>
      <div className="about-section-box">
            <div className="about-box-content">
                <h3 className="about-box-heading">Tokenomics</h3>
                <p className="about-box-description">
                    Download MetaMask or your preferred wallet from the app store or Google Play Store. Desktop users can download the Google Chrome extension from metamask.io.
                </p>
            </div>
      </div>
        </div>
      </section>
    );
  };

export default About;
