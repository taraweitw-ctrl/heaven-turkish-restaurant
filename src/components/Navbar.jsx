import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/transparent-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={logo}
          alt="Heaven Turkish Cuisine Logo"
          width="80"
          className="logo-image"
        />
        <div className="logo-text">
          <h1>Heaven</h1>
          <span>Turkish Restaurant</span>
        </div>
      </div>

      {/* Hamburger 3-bar button for mobile */}
      <button
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <NavLink
            to="/"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "light-gold-text active" : "light-gold-text"
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/menu"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "light-gold-text active" : "light-gold-text"
            }
          >
            MENU
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "light-gold-text active" : "light-gold-text"
            }
          >
            GALLERY
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "light-gold-text active" : "light-gold-text"
            }
          >
            ABOUT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            onClick={closeMenu}
            className={({ isActive }) =>
              isActive ? "light-gold-text active" : "light-gold-text"
            }
          >
            CONTACT
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
