// Footer.js

import React from 'react';
import './Footer.css'; // Import the styles
import logo from '../images/logo.jpeg'; // Import the logo image

const Footer = () => {
  return (
   
    <footer className="footer">
    <div className='footer-container'>
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="Company Logo" className="footer-logo" />
        </div>
        <div className="footer-section">
          <h3>İletişim </h3>
          <p>📞: : 0532 772 51 80 </p>
          <p>  ✉️ : info@alharamaintur.com</p>
          <p>📍 : Akşemseddin Mahallesi / Akdeniz Caddesi /<br/> No : 48/1  Nur apartmanı, FATİH / İSTANBUL</p>
        </div>
        <div className="footer-section">
          <h3>Bağlantılar</h3>
          <ul className="footer-links">
            <li><a href="/">Anasayfa</a></li>
            <li><a href="/kurumsal">Kurumsal</a></li>
            <li><a href="/aboutus">Hakkımızda</a></li>
            <li><a href="/services">Hizmetlerimiz</a></li>
            <li><a href="/contactus">İletişim</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 SK. All Rights Reserved.</p>
      </div>
      </div>
    </footer>
    
  );
};

export default Footer;
