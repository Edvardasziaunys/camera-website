import "./ElysiumSection.css";
import React, { useState } from "react";
import RouterButton from "./RouterButton";

function ElysiumSection() {
  const [activeTab, setActiveTab] = useState("tab1");

  const renderContent = () => {
    switch (activeTab) {
      case "tab1":
        return (
          <p>
            If you would like to schedule a Demo with us, where we would explain
            the platform and it's functions, you can contact us at
            <b> demo@elysium.com</b>, or see the other tabs for explanations
            about the respectful functions.
          </p>
        );
      case "tab2":
        return (
          <div className="tab-camera">
            <p>
              <b>Cameras</b>: this function allows you to upload all your gear
              to the website, so that you could keep track of it, add
              descriptions and let other users know your thoughts about specific
              equipment.
            </p>
            <RouterButton name="Try out" to="/my-cameras" />
          </div>
        );
      case "tab3":
        return (
          <div className="tab-gallery">
            <p>
              <b>Gallery</b>: this function allows you to display your best
              photos in a beautiful gallery for others to view and appreciate
              your work, consider this as you personal portfolio which you would
              be able to sahre with possible employers.
            </p>
            <RouterButton name="Try out" to="/my-gallery" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="elysium-wrapper">
      <h2>FUNCTIONS</h2>
      <div className="elysium-box">
        <img src="./logocrop.png" alt="logo-crop"></img>
        <div className="tabs">
          <button
            className={activeTab === "tab1" ? "active" : ""}
            onClick={() => setActiveTab("tab1")}
          >
            Demo
          </button>
          <button
            className={activeTab === "tab2" ? "active" : ""}
            onClick={() => setActiveTab("tab2")}
          >
            Cameras
          </button>
          <button
            className={activeTab === "tab3" ? "active" : ""}
            onClick={() => setActiveTab("tab3")}
          >
            Gallery
          </button>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}

export default ElysiumSection;
