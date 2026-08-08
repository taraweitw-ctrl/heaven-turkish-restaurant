import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">About Us</h1>
        <p className="about-subtitle real-gold-gradient">
          Discover the heart of Turkish culinary traditions
        </p>
      </section>

      {/* Philosophy Section: Text + Feature Image */}
      {/* 1. Added position: relative to trap the absolute peach background here */}
      <section className="about-philosophy" style={{ position: "relative" }}>
        {/* 2. Here is your glowing peach background! */}
        <div className="peach-background-philosophy"></div>

        {/* 3. Added relative positioning and z-index to text so it sits on top of the blur */}
        <div
          className="philosophy-text"
          style={{ position: "relative", zIndex: 1 }}
        >
          <h2 className="real-gold-gradient">Our Philosophy</h2>
          <p>
            At <strong>Heaven Turkish Cuisine</strong>, we’re passionate about
            sharing the vibrant culinary traditions of Turkey with our
            community. Our chefs use authentic recipes and the finest
            ingredients to prepare a menu that celebrates the rich flavors of
            Turkish cuisine.
          </p>
          <p>
            Every dish is a labor of love, crafted to transport you straight to
            the bustling streets and warm dining rooms of Istanbul. Whether
            you're here for a quick bite, ordering delivery for the family, or
            sitting down for a grand feast, we invite you to experience a true
            taste of Heaven.
          </p>
        </div>

        {/* Feature Image with offset gold border trick */}
        <div
          className="philosophy-image-wrapper"
          style={{ position: "relative", zIndex: 1 }}
        >
          <img
            src="/food-3.PNG"
            alt="Heaven Grand Mixed Grill"
            className="philosophy-image"
          />
          <div className="image-accent-border"></div>
        </div>
      </section>

      {/* Mini Visual Showcase Grid */}
      <section className="about-showcase">
        <div className="showcase-grid">
          <img
            src="/food-1.PNG"
            alt="Hummus and Fresh Flatbread"
            className="showcase-img"
          />
          <img
            src="/food-7.PNG"
            alt="Iskender Kebab"
            className="showcase-img"
          />
          <img src="/food-4.JPG" alt="Adana Kebab" className="showcase-img" />
        </div>
      </section>
    </div>
  );
};

export default About;
