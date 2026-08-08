import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // 1. Added the Link import here!
import "./Carousel.css";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      title: "Delicious Dish 1",
      image: "/food-1.PNG",
      review: "Absolutely incredible! The flavors are perfectly balanced.",
    },
    {
      id: 2,
      title: "Delicious Dish 2",
      image: "/food-2.JPG",
      review: "Flaky, buttery, and cooked to perfection.",
    },
    {
      id: 3,
      title: "Delicious Dish 4",
      image: "/food-4.JPG",
      review: "The perfect end to a heavy meal.",
    },
    // The duplicates that make the illusion possible
    {
      id: 4,
      title: "Delicious Dish 1",
      image: "/food-3.PNG",
      review: "Absolutely incredible! The flavors are perfectly balanced.",
    },
    {
      id: 5,
      title: "Delicious Dish 2",
      image: "/food-5.PNG",
      review: "Flaky, buttery, and cooked to perfection.",
    },
    {
      id: 6,
      title: "Delicious Dish 4",
      image: "/food-5.PNG",
      review: "The perfect end to a heavy meal.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const maxIndex = 3;

  // =========================================
  // THE ILLUSION: Teleporting back to the start
  // =========================================
  useEffect(() => {
    if (currentIndex === maxIndex) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, maxIndex]);

  useEffect(() => {
    if (!isTransitioning) {
      const timeout = setTimeout(() => setIsTransitioning(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isTransitioning]);

  // =========================================
  // AUTO-SCROLL TIMER
  // =========================================
  useEffect(() => {
    if (selectedSlide) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, [selectedSlide]);

  const nextSlide = () => {
    if (currentIndex >= maxIndex) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (currentIndex === 0) {
      setIsTransitioning(false);
      setCurrentIndex(maxIndex);
      setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex(maxIndex - 1);
      }, 50);
    } else {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="carousel-section" id="gallery">
      {/* 1. The glowing peach background blob */}
      <div className="carousel-peach-bg"></div>

      {/* 2. The new heading */}
      <h2 className="carousel-heading">Our Food</h2>

      {/* 3. Your existing carousel container sits right below */}
      <div className="carousel-container">
        <button className="carousel-btn prev" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="carousel-track-container">
          <ul
            className={`carousel-track ${!isTransitioning ? "no-transition" : ""}`}
            style={{
              transform: `translateX(-${currentIndex * 33.333}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <li
                key={index}
                className={`carousel-slide ${index === currentIndex + 1 ? "center-slide" : ""}`}
                onClick={() => setSelectedSlide(slide)}
              >
                <div className="slide-content">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="slide-image"
                  />
                  <h3 className="slide-title">{slide.title}</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <button className="carousel-btn next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>

      {/* 4. The View Full Menu Button safely inside the return block! */}
      <div className="view-menu-btn-wrapper">
        <Link to="/menu" className="view-menu-btn">
          VIEW FULL MENU
        </Link>
      </div>

      {selectedSlide && (
        <div className="modal-overlay" onClick={() => setSelectedSlide(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="close-btn"
              onClick={() => setSelectedSlide(null)}
            >
              ✕
            </button>
            <img
              src={selectedSlide.image}
              alt={selectedSlide.title}
              className="modal-image"
            />
            <h2 className="modal-title">{selectedSlide.title}</h2>
            <p className="modal-review">{selectedSlide.review}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Carousel;
