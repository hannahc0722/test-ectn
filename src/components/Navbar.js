import React from 'react';
import './styles/Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Logo</div>
      <div className="menu">
        <a href="#">ZEUS</a>
        <a href="#">SOIL SAUCE</a>
        <a href="#">SHOP</a>
        <a href="#">ABOUT</a>
        <a href="#">IMPACT</a>
        <a href="#">INVEST</a>
        <a href="#" className="login">Log In</a>
        <a href="#" className="cart">0</a>
      </div>
    </div>
  );
};

export default Navbar;
