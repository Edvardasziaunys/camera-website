import React, { useEffect, useState } from "react";
import "./GalleryHero.css";

function GalleryHero() {
  const [galleryData, setGalleryData] = useState([]);
  const [newItem, setNewItem] = useState({ image: "", description: "" });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/gallery")
      .then((response) => response.json())
      .then((data) => setGalleryData(data))
      .catch((error) => console.error("Error fetching gallery data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAdd = () => {
    if (!newItem.image || !newItem.description) {
      alert("Image and description are required");
      return;
    }

    fetch("http://localhost:8080/gallery", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setGalleryData([...galleryData, data]);
        setNewItem({ image: "", description: "" });
        setIsModalOpen(false);
      })
      .catch((error) => console.error("Error adding gallery item:", error));
  };

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
      <div className="add-button-container">
        <button onClick={() => setIsModalOpen(true)}>Add Photo</button>
      </div>
      <div className={`modal ${isModalOpen ? "show" : ""}`}>
        <div className="modal-content">
          <span className="close" onClick={() => setIsModalOpen(false)}>
            &times;
          </span>
          <h2>Add New Photo</h2>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newItem.image}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newItem.description}
            onChange={handleChange}
          />
          <button onClick={handleAdd}>Submit</button>
        </div>
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
