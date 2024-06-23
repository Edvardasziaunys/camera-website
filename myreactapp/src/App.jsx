import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navigation.jsx";
import Home from "./Pages/Home.jsx";
import MyCameras from "./Pages/Cameras.jsx";
import MyGallery from "./Pages/Gallery.jsx";
import AboutUs from "./Pages/AboutUs.jsx";

import FooterSection from "./Components/FooterSection.jsx";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/my-cameras" element={<MyCameras />} />
            <Route path="/my-gallery" element={<MyGallery />} />
            <Route path="/about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <footer>
          <FooterSection />
        </footer>
      </div>
    </Router>
  );
}

export default App;
