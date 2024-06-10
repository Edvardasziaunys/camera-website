import "./Navigation.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation-wrapper">
      <nav className="navigation-menu">
        <img src="./Photostudiologo.png"></img>
        <div>
          <Link to="/camera-diretory">
            <p>Cameras</p>
          </Link>
          <Link to="/gallery">
            <p>Gallery</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
