import React from 'react';
import { Link } from 'react-scroll';
import './style/Header.css'

const Header = () => {
  return (
    <header className="header">
        <a href="/" className="logo">Your Logo Here</a>
      <ul className="header-list">
        {/* <li className="header-item">
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </li> */}
        <li className="header-item">
          <button className='btn'>Bridge</button>
        </li>
        <li className="header-item">
          <button className='btn'>Buy Now</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;