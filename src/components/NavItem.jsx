import React from 'react';
import { Link } from 'react-scroll';

const NavItem = ({ section, isActive, onClick }) => {
  return (
    <li className={`nav-item ${isActive ? 'active' : ''}`}>
      <button className='btn-item' onClick={onClick}><Link className="link" to={section} smooth={true} duration={500}>{section}</Link></button>
    </li>
  );
};

export default NavItem;

