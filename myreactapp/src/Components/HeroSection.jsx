import "./HeroSection.css";
import RouterButton from "./RouterButton";

function HeroSection() {
  return (
    <div className="hero-wrapper">
      <h1>YOUR ALL-IN-ONE PORTFOLIO</h1>
      <p>
        In this website you are the CREATOR! Realize your dreams and join us.{" "}
        <br />
        <b>Launching in May 2025</b>
      </p>
      <div className="button-wrapper">
        <RouterButton name="My Gear" to="/my-cameras" />
        <RouterButton name="My Gallery" to="/my-gallery" />
      </div>
    </div>
  );
}

export default HeroSection;
