import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../assets/transparent-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img
          src={logo}
          alt="Heaven Turkish Cuisine Logo"
          width="80"
          className="logo-image"
        />
        {/* We wrap the text in this div so it sits next to the image! */}
        <div className="logo-text">
          <h1>Heaven</h1>
          <span>Turkish Restaurant</span>
        </div>
      </div>

      <ul className="navbar-links">
        <li>
          <NavLink
            to="/"
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
