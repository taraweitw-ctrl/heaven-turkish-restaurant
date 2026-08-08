import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Left: Brand & Info */}
        <div className="footer-section brand-section">
          {/* Using the cursive and quicksand font combo from your navbar */}
          <div className="footer-brand">
            <h2>Heaven</h2>
            <span>Turkish Restaurant</span>
          </div>
          <p className="footer-blurb">
            Experience the true taste of Turkey right here in Thornhill. Dine
            in, take out, or order delivery straight to your door!
          </p>
          <div className="delivery-partners">
            <span>Available on:</span> Uber Eats | DoorDash | Skip the Dishes
          </div>
        </div>

        {/* Middle: Quick Links */}
        <div className="footer-section links-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact Details */}
        <div className="footer-section contact-section">
          <h3 className="footer-heading">Get in Touch</h3>
          <div className="footer-contact-info">
            <p>
              <strong>📍 Address:</strong>
              <br />
              7330 Yonge St, Suite 16
              <br />
              Thornhill, ON, L4J 7Y7
            </p>
            <p>
              <strong>📞 Phone:</strong>
              <br />
              (365) 556-0478
            </p>
            <p>
              <strong>✉️ Instagram:</strong>
              <br />
              <a
                href="https://instagram.com/heaventurkishcuisine"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-ig-link"
              >
                @heaventurkishcuisine
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Heaven Turkish Cuisine. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
