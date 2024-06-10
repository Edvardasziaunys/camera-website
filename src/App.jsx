import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navigation.jsx";

function App() {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <main>
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/my-cameras" element={<MyCameras />} />
          <Route path="/my-gallery" element={<MyGallery />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes> */}
      </main>
      <footer></footer>
    </Router>
  );
}

export default App;
