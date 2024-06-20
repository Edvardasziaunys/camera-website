import "./Navigation.css";
import { Link } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navigation-wrapper">
      <nav className="navigation-menu">
        <Link to="/home">
          <img src="./logocrop.png" to="/Home"></img>
        </Link>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/my-cameras" onClick={() => setIsOpen(false)}>
            <p>Cameras</p>
          </Link>
          <Link to="/my-gallery" onClick={() => setIsOpen(false)}>
            <p>Gallery</p>
          </Link>
          <Link to="/about-us" onClick={() => setIsOpen(false)}>
            <p className="about">About Us</p>
          </Link>
        </div>
        <div className="burger-menu" onClick={toggleMenu}>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
          <div className={`line ${isOpen ? "open" : ""}`}></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
