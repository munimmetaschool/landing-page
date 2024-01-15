import React from 'react';
import { Link } from 'react-scroll';
import './style/NavBar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="about" smooth={true} duration={500}>About</Link>
        </li>
        <li className="navbar-item">
          <Link to="how-to-buy" smooth={true} duration={500}>How to Buy</Link>
        </li>
        <li className="navbar-item">
          <Link to="tokenomics" smooth={true} duration={500}>Tokenomics</Link>
        </li>
        <li className="navbar-item">
          <Link to="roadmap" smooth={true} duration={500}>Roadmap</Link>
        </li>
        <li className="navbar-item">
          <button>Buy Now</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
