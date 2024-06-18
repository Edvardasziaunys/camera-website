import React, { useEffect, useState } from "react";
import "./CamerasHero.css";

function CamerasHero() {
  const [camerasData, setCamerasData] = useState([]);
  const [newItem, setNewItem] = useState({
    image: "",
    description: "",
    make: "",
    model: "",
    spec: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:8080/cameras")
      .then((response) => response.json())
      .then((data) => setCamerasData(data))
      .catch((error) => console.error("Error fetching camera data:", error));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleAdd = () => {
    if (
      !newItem.image ||
      !newItem.description ||
      !newItem.make ||
      !newItem.model ||
      !newItem.spec
    ) {
      alert("Image and description are required");
      return;
    }

    fetch("http://localhost:8080/cameras", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setCamerasData([...camerasData, data]);
        setNewItem({
          image: "",
          description: "",
          make: "",
          model: "",
          spec: "",
        });
        setIsModalOpen(false);
      })
      .catch((error) => console.error("Error adding gallery item:", error));
  };

  return (
    <div className="camera-hero-wrapper">
      <div className="cameras-hero-section-text">
        <h1>Cameras</h1>
        <p>
          Upload all your gear and display them for everyone, so that they would
          know your houghts on them.
          <br />
          <b>Your personal portfolio</b>
        </p>
      </div>
      <div className="add-button-container">
        <button onClick={() => setIsModalOpen(true)}>Add Gear</button>
      </div>
      <div className={`modal ${isModalOpen ? "show" : ""}`}>
        <div className="modal-content">
          <span className="close" onClick={() => setIsModalOpen(false)}>
            &times;
          </span>
          <h2>Add New Gear</h2>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newItem.image}
            onChange={handleChange}
          />
          <input
            type="text"
            name="make"
            placeholder="Make"
            value={newItem.make}
            onChange={handleChange}
          />
          <input
            type="text"
            name="model"
            placeholder="Model"
            value={newItem.model}
            onChange={handleChange}
          />
          <input
            type="text"
            name="spec"
            placeholder="Specification"
            value={newItem.spec}
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
        {camerasData.map((item) => (
          <div key={item.id} className="gallery-card">
            <img
              src={item.image}
              alt={item.description}
              className="gallery-image"
            />
            <p className="camera-description-make">{item.make}</p>
            <p className="camera-description">
              <b>Model: </b>
              {item.model}
            </p>
            <p className="camera-description">
              <b>Specs: </b>
              {item.spec}
            </p>
            <p className="camera-description">
              <b>Description: </b>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CamerasHero;
