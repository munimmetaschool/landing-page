import React, { useState } from 'react';
import './style/NavBar.css'
import NavItem from './NavItem';

const SECTIONS = ['Home', 'About', 'How To Buy'];

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <nav className="navbar">
      <div className='navbar-page'>
        <a href="/" className="logo">F<span className='dot dot-1'>.</span>R<span className='dot dot-2'>.</span>I<span className='dot dot-3'>.</span>E<span className='dot dot-1'>.</span>N<span className='dot dot-2'>.</span>D<span className='dot dot-3'>.</span>S</a>
        <ul className="nav-links">
          {SECTIONS.map((section) => (
            <NavItem
              key={section}
              section={section}
              isActive={section === activeSection}
              onClick={() => handleNavClick(section)}
            />
          ))}
          <li className="nav-item">
            <button className='btn'>Bridge</button>
          </li>
          <li className="nav-item">
            <button className='btn'>Buy Now</button>
          </li>
          <li className="nav-item">
            <button className='btn'>Connect</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;


// import React from 'react';
// import { Link } from 'react-scroll';
// import './style/NavBar.css'

// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-list">
//         <li className="navbar-item">
//           <Link to="home" smooth={true} duration={500}>Home</Link>
//         </li>
//         <li className="navbar-item">
//           <Link to="about" smooth={true} duration={500}>About</Link>
//         </li>
//         <li className="navbar-item">
//           <Link to="how-to-buy" smooth={true} duration={500}>How to Buy</Link>
//         </li>
//         <li className="navbar-item">
//           <Link to="tokenomics" smooth={true} duration={500}>Tokenomics</Link>
//         </li>
//         <li className="navbar-item">
//           <Link to="roadmap" smooth={true} duration={500}>Roadmap</Link>
//         </li>
//         <li className="navbar-item">
//           <button>Buy Now</button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;

