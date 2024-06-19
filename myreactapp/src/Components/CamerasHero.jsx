import React, { useEffect, useState } from "react";
import "./CamerasHero.css";
import ViewMoreModal from "./ViewMoreModal";
import AddGearModal from "./AddGearModal";

function CamerasHero() {
  const [camerasData, setCamerasData] = useState([]);
  const [newItem, setNewItem] = useState({
    image: "",
    description: "",
    make: "",
    model: "",
    spec: "",
  });
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isViewMoreModalOpen, setIsViewMoreModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

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
        setIsAddModalOpen(false);
      })
      .catch((error) => console.error("Error adding gallery item:", error));
  };

  const handleViewMore = (item) => {
    setSelectedItem(item);
    setIsViewMoreModalOpen(true);
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
        <button onClick={() => setIsAddModalOpen(true)}>Add Gear</button>
      </div>
      <AddGearModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        newItem={newItem}
        handleChange={handleChange}
        handleAdd={handleAdd}
      />

      <ViewMoreModal
        isOpen={isViewMoreModalOpen}
        onClose={() => setIsViewMoreModalOpen(false)}
        item={selectedItem}
      />
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

            <button onClick={() => handleViewMore(item)}>View More</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CamerasHero;