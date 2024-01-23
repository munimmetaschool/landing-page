import React from 'react';
import './style/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faDiscord } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-page'>
      <div className="about-us">
        <h2>About Us</h2>
        <p>
        Welcome to Build in Public, Metaschool's innovation hub! Dive into a series of demystifying token launches, where transparency meets creativity. We're not just launching a token; we're igniting a movement. In this 30-day adventure, we will navigate token launches with shared insights and triumphs. This will be a vibrant journey, a collective learning experience, and shared success. Welcome to Build in Public – where transparency dances with innovation, and every subscriber is a star in our constellation!
        </p>
      </div>
      <div className="footer-right">
        <div className="about-metaschool">
          <h3>Build in Public</h3>
          <p className='about-metaschool-description'>
          Crafted with ♥ by 🔮 metaschool
          </p>
        </div>
        <div className="social-media">
          <ul>
          <li>
              <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href="#">
              <FontAwesomeIcon icon={faDiscord} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;