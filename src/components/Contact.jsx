import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact us</h1>

      <div className="contact-container">
        {/* Left Side: Contact Information */}

        <div className="contact-info yellow-glow-wrapper">
          <p className="contact-intro">
            We'd love to hear from you! Whether you're planning a visit, have a
            question, or want to place an order, don't hesitate to reach out.
          </p>

          <div className="info-details">
            <div className="info-item">
              <span className="icon">📍</span>
              <p>
                <strong>Address:</strong> 7330 Yonge St, Suite 16
                <br />
                Thornhill, ON, L4J 7Y7
              </p>
            </div>

            <div className="info-item">
              <span className="icon">📞</span>
              <p>
                <strong>Phone:</strong> (365) 556-0478
              </p>
            </div>

            <div className="info-item">
              <span className="icon">✉️</span>
              <p>
                <strong>Email:</strong>
                <br />
                Follow Us on Instagram:
                <br />
                <a
                  href="https://instagram.com/heaventurkishcuisine"
                  className="ig-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  @heaventurkishcuisine
                </a>
              </p>
            </div>
          </div>

          <p className="contact-delivery">
            We also partner with <strong>Uber Eats, Skip the Dishes</strong>,
            and <strong>DoorDash</strong> for convenient delivery straight to
            your door.
          </p>
        </div>

        {/* Right Side: Contact Form */}
        <div className="contact-form-wrapper">
          {/* Replace the old <form ...> with this one */}
          <form
            className="contact-form"
            action="https://formspree.io/f/YOUR_FORMSPREE_ID"
            method="POST"
          >
            <div className="form-row">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-row">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-row">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required />
            </div>

            <div className="form-row form-row-message">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>
            </div>

            <div className="submit-row">
              <button type="submit" className="send-btn">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map Section underneath everything */}
      <div className="contact-map-wrapper">
        <iframe
          title="Heaven Turkish Cuisine Location Map"
          src="https://maps.google.com/maps?q=7330%20Yonge%20St,%20Thornhill,%20ON,%20L4J%207Y7&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
