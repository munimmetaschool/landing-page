import React from 'react';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="about-us">
        <h2>About Us</h2>
        <p>
          Your mission statement or a brief overview of your company/project. This text should be concise and engaging.
        </p>
      </div>
      <div className="footer-right">
        <div className="about-metaschool">
          <h3>About Metaschool</h3>
          <p>
            A short description of Metaschool and its offerings. Focus on what makes it unique and valuable.
          </p>
        </div>
        <div className="social-media">
          <h3>Connect with Us</h3>
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-discord"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
