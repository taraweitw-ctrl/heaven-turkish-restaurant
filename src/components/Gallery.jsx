import React, { useState } from "react";
import "./Gallery.css";

// Gallery image data using your exact VS Code file names
const galleryImages = [
  {
    id: 1,
    src: "/food-1.PNG",
    title: "Hummus & Fresh Flatbread",
    description:
      "Smooth, creamy mashed chickpeas and tahini blended with garlic, olive oil, and authentic Mediterranean spices, served alongside warm pita bread.",
  },
  {
    id: 2,
    src: "/food-2.JPG",
    title: "Baba Ghanoush",
    description:
      "Char-grilled smoked eggplant puree flavored with garlic, rich olive oil, mayonnaise, fresh yogurt, and a splash of lemon juice.",
  },
  {
    id: 3,
    src: "/food-3.PNG",
    title: "Heaven Grand Mixed Grill",
    description:
      "An extraordinary feast featuring Adana kebab, chicken shish, beef shish, chicken wings, and mix döner served over checkered parchment with aromatic rice and grilled peppers.",
  },
  {
    id: 4,
    src: "/food-4.JPG",
    title: "Adana Kebab To-Go",
    description:
      "Two skewers of hand-minced, charcoal-grilled spicy beef kebabs served over a bed of seasoned rice pilaf with fresh salad and garlic sauces.",
  },
  {
    id: 5,
    src: "/food-5.PNG",
    title: "Kazandibi (Milk Custard)",
    description:
      "Traditional caramelized Turkish milk pudding with a caramelized bottom layer, finished with a generous dusting of crushed pistachios.",
  },
  {
    id: 6,
    src: "/food-6.PNG",
    title: "Lamb Chops (Pirzola)",
    description:
      "Four pieces of tender, charcoal-grilled lamb chops cooked to perfection, accompanied by seasoned rice pilaf, fresh cabbage slaw, diced tomatoes, and grilled pepper.",
  },
  {
    id: 7,
    src: "/food-7.PNG",
    title: "Iskender Kebab",
    description:
      "Thinly sliced döner kebab served over pan-sautéed bread cubes, drenched in rich tomato sauce and warm melted butter, balanced with thick garlic yogurt.",
  },
  {
    id: 8,
    src: "/food-8.PNG",
    title: "Sultan Combo Platter",
    description:
      "A massive platter packed with chicken shish, beef döner, grilled wings, and Adana kebabs, served with fluffy rice, fresh salad, and ice-cold Ayran.",
  },
  {
    id: 9,
    src: "/food-9.PNG",
    title: "Sac Tava",
    description:
      "Sizzling pan-sautéed tender beef cooked with diced onions, bell peppers, tomatoes, and aromatic Turkish spices, served red-hot right off the skillet.",
  },
  {
    id: 10,
    src: "/food-10.PNG",
    title: "Mix Cold Appetizer Platter",
    description:
      "A sampling of our house-made mezes including Hummus, Baba Ghanoush, Sote Eggplant, Acılı Ezme, and Cacik, served with lemon slices and crisp Pide.",
  },
  {
    id: 11,
    src: "/food-11.PNG",
    title: "Beyti Kebab",
    description:
      "Juicy Adana kebab wrapped in crisp lavash bread, sliced into rounds and topped with fresh tomato sauce, melted butter, garlic yogurt, and served with rice pilaf.",
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="gallery-container">
      <div className="gallery-header">
        <h1 className="gallery-title">GALLERY</h1>
        <p className="gallery-subtitle">A taste of what awaits you at Heaven</p>
      </div>

      {/* Grid of Food Photos */}
      <div className="gallery-grid">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="gallery-card"
            onClick={() => setSelectedImage(image)}
          >
            <img src={image.src} alt={image.title} loading="lazy" />
            <div className="gallery-overlay">
              <span className="overlay-title">{image.title}</span>
              <span className="overlay-sub">Click to view details</span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal with Title & Description */}
      {selectedImage && (
        <div
          className="lightbox-overlay"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="lightbox-content"
            onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside box
          >
            <span
              className="lightbox-close"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </span>
            <img src={selectedImage.src} alt={selectedImage.title} />
            <div className="lightbox-details">
              <h2>{selectedImage.title}</h2>
              <p>{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
