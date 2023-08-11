// Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.jpeg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsResponsive(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="Logo" />
        </Link>
        {isResponsive ? (
          <span className="menu-icon" onClick={toggleNav}>
            {isNavOpen ? "X" : "|||"}
          </span>
        ) : (
          <div
            className={`menu-icon ${isNavOpen ? "open" : ""}`}
            onClick={toggleNav}
          >
            <i className="fas fa-bars"></i>
          </div>
        )}
        <ul className="nav-menu">
  <li className="nav-item">
    <Link to="/" className="nav-links" onClick={() => setIsNavOpen(false)}>
      Anasayfa
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/kurumsal" className="nav-links" onClick={() => setIsNavOpen(false)}>
      Kurumsal
    </Link>
  </li>
  <li className="nav-item">
  <Link to="/gallery" className="nav-links" onClick={() => setIsNavOpen(false)}>
  Gallery
  </Link>
</li>
  <li className="nav-item">
    <Link to="/aboutus" className="nav-links" onClick={() => setIsNavOpen(false)}>
    Hakkımızda
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/services" className="nav-links" onClick={() => setIsNavOpen(false)}>
    Hizmetlerimiz
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/contactus" className="nav-links" onClick={() => setIsNavOpen(false)}>
    İletişim
    </Link>
  </li>
</ul>

      </div>
    </nav>
  );
};

export default Navbar;
