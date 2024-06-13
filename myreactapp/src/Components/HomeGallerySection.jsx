import React, { useEffect, useState } from "react";
import "./HomeGallerySection.css";

function HomeGallerySection() {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/gallery/limit")
      .then((response) => response.json())
      .then((data) => setGalleryData(data))
      .catch((error) => console.error("Error fetching gallery data:", error));
  }, []);

  return (
    <div className="home-gallery-wrapper">
      <h2>QUICK PEAK OF MY WORK</h2>
      <div className="home-gallery-cards">
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

export default HomeGallerySection;
