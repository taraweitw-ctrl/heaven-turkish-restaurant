import React from "react";
import "./Delivery.css";

const Delivery = () => {
  return (
    <section className="delivery-section">
      {/* Soft floating blurred background aura */}
      <div className="delivery-blur-aura"></div>

      <div className="delivery-container">
        {/* Left Side: Vertical Stacked Delivery Logos */}
        <div className="delivery-logos">
          <div className="delivery-badge uber-eats">
            <span className="uber-white">UBER</span>
            <span className="eats-green">eats</span>
          </div>

          <div className="delivery-badge doordash">
            <span className="dd-text">DOORDASH</span>
          </div>

          <div className="delivery-badge skip">
            <span className="skip-main">SKIP</span>
            <span className="skip-sub">THE DISHES</span>
          </div>
        </div>

        {/* Right Side: Title & Text Content */}
        <div className="delivery-content">
          <h2 className="delivery-title">WE DELIVER!</h2>
          <p className="delivery-text">
            Craving Turkish food at home? We work with{" "}
            <strong>Uber Eats</strong>, <strong>DoorDash</strong>, and{" "}
            <strong>Skip the Dishes</strong> to bring your favorite dishes right
            to your door. Join us for an unforgettable dining experience or
            order online for takeout and delivery!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
