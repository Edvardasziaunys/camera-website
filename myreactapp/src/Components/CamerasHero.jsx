import React, { useEffect, useState } from "react";
import "./CamerasHero.css";
import ViewMoreModal from "./ViewMoreModal";
import AddGearModal from "./AddGearModal";
import FilterDropdown from "./FilterDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
  const [filterMake, setFilterMake] = useState("");

  useEffect(() => {
    fetchCameras();
  }, []);

  const fetchCameras = () => {
    fetch("http://localhost:8080/cameras")
      .then((response) => response.json())
      .then((data) => setCamerasData(data))
      .catch((error) => console.error("Error fetching camera data:", error));
  };

  const fetchFilteredCameras = (make) => {
    let url = `http://localhost:8080/cameras/filter?make=${make}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCamerasData(data))
      .catch((error) => console.error("Error fetching camera data:", error));
  };

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

  const handleFilterChange = (e) => {
    const selectedMake = e.target.value;
    setFilterMake(selectedMake);
    if (selectedMake === "") {
      fetchCameras();
    } else {
      fetchFilteredCameras(selectedMake);
    }
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/cameras/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setCamerasData(camerasData.filter((camera) => camera.id !== id));
        } else {
          console.error("Error deleting camera");
        }
      })
      .catch((error) => console.error("Error deleting camera:", error));
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
      <div className="filter-add">
        <FilterDropdown
          filterMake={filterMake}
          handleFilterChange={handleFilterChange}
        />
        <div className="add-button-container">
          <button onClick={() => setIsAddModalOpen(true)}>Add Gear</button>
        </div>
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
            <div className="button-group">
              <button onClick={() => handleViewMore(item)}>View More</button>
              <button
                onClick={() => handleDelete(item.id)}
                className="delete-button"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CamerasHero;
