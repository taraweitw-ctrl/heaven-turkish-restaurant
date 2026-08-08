import "./LocationHours.css";

// 1. Import your image from the assets folder!
// (Adjust the '../' part if your file structure is slightly different)
import interiorImg from "../assets/interior.jpg";

const LocationHours = () => {
  return (
    <section className="location-section" id="location">
      {/* Heading stays perfectly centered outside the split columns */}
      <h2 className="location-heading">Visit Us</h2>

      <div className="location-content-wrapper">
        {/* LEFT SIDE: The Text (Takes up 2/3 of the space) */}
        <div className="location-text-side">
          <div className="info-block">
            <h3>Opening Hours</h3>
            <p>
              <strong>Mon - Thurs:</strong> 11:00 AM - 10:00 PM
            </p>
            <p>
              <strong>Fri - Sun:</strong> 11:00 AM - 11:00 PM
            </p>
          </div>

          <div className="info-block location-block">
            <h3>Location & Contact</h3>
            <p>
              7330 Yonge St Ste 110
              <br />
              Thornhill, ON L4J 7Y7
            </p>
            <p className="phone-number">
              <strong>Phone:</strong> (365) 556-0478
            </p>
          </div>
        </div>

        {/* RIGHT SIDE: The Image (Takes up 1/3 of the space) */}
        <div className="location-image-side">
          <img
            src={interiorImg}
            alt="Restaurant Interior"
            className="interior-photo"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationHours;
