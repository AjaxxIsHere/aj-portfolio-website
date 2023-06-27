/*import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
     
      <h1>Get to know more about AJ!</h1>

    
      <div className={`links ${isDropdownOpen ? 'dropdown-open' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/download-CV">CV</Link>
      </div>

     
      <div className={`dropdown ${isDropdownOpen ? 'dropdown-open' : ''}`}>
        <button className="dropdown-toggle" onClick={toggleDropdown}>
          Menu
        </button>
        <div className="dropdown-menu">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/download-CV">CV</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; */


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar">
      <h1>Hi Im AJ!</h1>
      <div className={`links ${showMenu ? 'show' : ''}`}>
        <Link to="/">Home</Link>
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/download-CV">CV</Link>
      </div>
      
    </nav>
  );
}

export default Navbar;

