import React, { useEffect, useState } from "react";
import "./GalleryHero.css";

function GalleryHero() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/gallery")
      .then((response) => response.json())
      .then((data) => setGalleryData(data))
      .catch((error) => console.error("Error fetching gallery data:", error));
  }, []);

  return (
    <div className="gallery-hero-wrapper">
      <div className="hero-section-text">
        <h1>GALLERY</h1>
        <p>
          Upload all your photos and display them for everyone.
          <br />
          <b>Your personal portfolio</b>
        </p>
      </div>
      <div className="gallery-cards">
        {galleryData.map((item) => (
          <div key={item.id} className="gallery-card">
            <img
              src={item.image}
              alt={item.description}
              className="gallery-image"
            />
            <p className="gallery-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GalleryHero;
