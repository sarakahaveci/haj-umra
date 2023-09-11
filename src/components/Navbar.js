import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "./images/logo.jpeg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isResponsive, setIsResponsive] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isUmraOpen, setIsUmraOpen] = useState(false);

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

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  const toggleUmra = () => {
    setIsUmraOpen(!isUmraOpen);
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
        <ul className={`nav-menu ${isNavOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={() => setIsNavOpen(false)}
            >
              Anasayfa
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/kurumsal"
              className="nav-links"
              onClick={() => setIsNavOpen(false)}
            >
              Kurumsal
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/gallery"
              className="nav-links"
              onClick={() => setIsNavOpen(false)}
            >
              Gallery
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/aboutus"
              className="nav-links"
              onClick={() => setIsNavOpen(false)}
            >
              Hakkımızda
            </Link>
          </li>
          <li className="nav-item">
            <div className="nav-links" onClick={toggleServices}>
              Hizmetlerimiz
              <i
                className={`fas fa-chevron-down ${isServicesOpen ? "open" : ""}`}
              />
            </div>
            {/* Dropdown content for Services */}
            {isServicesOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/haj" onClick={() => setIsNavOpen(false)}>
                    Haj
                  </Link>
                </li>
                {/* Add another dropdown within Services */}
                <li>
                  <Link to="/umra" className="nav-links" onClick={toggleUmra}>
                    Umre
                    <i
                      className={`fas fa-chevron-down ${
                        isUmraOpen ? "open" : ""
                      }`}
                    />
                  </Link>
                  {/* Dropdown content for Umra */}
{isUmraOpen && (
  <ul className="sub-dropdown-menu">
    <li>
      <Link to="/umra/UmraInvite" onClick={() => setIsNavOpen(false)}>
        Umre’ye Davet
      </Link>
    </li>
    <li>
      <Link to="/umra/package2" onClick={() => setIsNavOpen(false)}>
        Umra Package 2
      </Link>
    </li>
    <li>
      <Link to="/umra/AlharamainUmra" onClick={() => setIsNavOpen(false)}>
        Alharamain'li Umra!
      </Link>
    </li>
    {/* Add more Umra package links here */}
  </ul>
)}

                </li>
                {/* Continue with other service links */}
              </ul>
            )}
          </li>
          {/* İletişim (Contact) link outside of Services dropdown */}
          <li className="nav-item">
            <Link
              to="/contactus"
              className="nav-links"
              onClick={() => setIsNavOpen(false)}
            >
              İletişim
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
