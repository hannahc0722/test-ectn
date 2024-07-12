import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Adjusted path

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">Logo</Link> {/* Make the logo a link to the home page */}
      </div>
      <div className="menu">
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/wastediv" className="menu-item">Waste Diversion</Link>
        <Link to="/sample-images" className="menu-item">Sample Images</Link>
        <Link to="/login" className="login">Log In</Link>
      </div>
    </div>
  );
};

export default Navbar;
