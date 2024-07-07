import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Adjusted path

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">Logo</Link>
      <div className="menu">
        <Link to="/" className="home">Home</Link>
        <Link to="/wastediv" className="wastediv">Waste Diversion</Link>
        <Link to="/login" className="login">Log In</Link>
      </div>
    </div>
  );
};

export default Navbar;
