import React from 'react';
import './Header.css';
import logo from '../../assets/logo.svg'
const Header = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-right w-full">
        <a href="#about" className="nav-link">About Us</a>
        <a href="#features" className="nav-link">Features</a>
        <a href="#more" className="nav-link">More Option</a>
        <a href="#contact" className="nav-link">Contact</a>
        <button className="signup-button">Sign Up</button>
        <button className="login-button">Log In</button>
      </div>
    </nav>
  );
};

export default Header;