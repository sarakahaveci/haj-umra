// Footer.js

import React from 'react';
import './Footer.css'; // Import the styles
import logo from '../images/logo.jpeg'; // Import the logo image

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="Company Logo" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Phone: +123 456 7890</p>
          <p>Email: contact@example.com</p>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/aboutus">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contactus">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
