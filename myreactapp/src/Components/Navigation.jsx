import "./Navigation.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navigation-wrapper">
      <nav className="navigation-menu">
        <Link to="/home">
          <img src="./Photostudiologo.png" to="/Home"></img>
        </Link>
        <div>
          <Link to="/my-cameras">
            <p>Cameras</p>
          </Link>
          <Link to="/my-gallery">
            <p>Gallery</p>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
