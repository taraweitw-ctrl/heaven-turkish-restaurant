import React from "react";
import "./Hero.css";
import foodImage from "../assets/hero-food.PNG";

const Hero = () => {
  return (
    <section className="hero-section">
      <img src="/gold-squiggle.svg" className="bg-squiggle" alt="" />
      <div className="peach-background"></div>{" "}
      {/* This is the peach background div */}
      <div className="hero-container">
        {/* LEFT SIDE: The Image */}
        <div className="hero-left">
          <img
            src={foodImage}
            alt="Authentic Turkish Cuisine"
            className="hero-food"
          />
          <p className="food-caption">
            Image: Delicious seared lamb chops with aromatic saffron rice and
            fresh vegetables
          </p>
        </div>

        {/* RIGHT SIDE: The Text and Button */}
        <div className="hero-right">
          <h2 className="hero-title">
            "Bringing the <span className="gold-heart">heart</span> <br />
            <span className="text-right">of Türkiye to your table"</span>
          </h2>

          <p className="hero-description">
            Welcome to Heaven Turkish Cuisine, your destination for authentic
            Turkish flavors and warm hospitality. From savory kebabs to sweet
            Baklava, we bring the taste of Turkey to your table in a cozy and
            inviting setting. Join us for an unforgettable dining experience!
          </p>

          <button
            className="order-btn"
            onClick={() =>
              window.open(
                "https://gosnappy.io/owa/r/heaven-turkish-cuisine/4402/menu_955/?skipBeforeEnter=true",
                "_blank",
              )
            }
          >
            <span className="btn-gradient-text">ORDER NOW</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
