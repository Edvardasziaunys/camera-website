import "./AboutUsContent.css";
import { useNavigate } from "react-router-dom";

function AboutUsContent() {
  const navigate = useNavigate();

  const handleCardClick = (path) => {
    navigate(path);
  };
  return (
    <div>
      <h3 className="about-heading">Press card to see page.</h3>
      <div className="about-content-wrapper">
        <div className="about-card" onClick={() => handleCardClick("/home")}>
          <img src="https://images.unsplash.com/photo-1603574670812-d24560880210?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <p>Home</p>
        </div>
        <div
          className="about-card"
          onClick={() => handleCardClick("/my-cameras")}
        >
          <img src="https://images.unsplash.com/photo-1588200618450-3a5b1d3b9aa5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <p>Cameras</p>
        </div>
        <div
          className="about-card"
          onClick={() => handleCardClick("/my-gallery")}
        >
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          <p>Gallery</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUsContent;
