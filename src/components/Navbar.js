import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; // Adjusted path

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="menu">
        <Link to="/login" className="login">Log In</Link>
      </div>
    </div>
  );
};

export default Navbar;
