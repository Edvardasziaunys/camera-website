import "./ElysiumSection.css";
// import RouterButton from "./RouterButton";

function ElysiumSection() {
  return (
    <div className="elysium-wrapper">
      <h1>WELCOME TO YOUR PERSONAL PHOTO LIBRARY</h1>
      <p>
        In this website you are the CREATOR, you can upload your camera gear, to
        keep your inventory tidy and clean, so that no gear is forgotten. Upload
        your best caught photos so that you can display them for everyone to
        see.
      </p>
      {/* <div className="button-wrapper">
        <RouterButton name="My Gear" to="/my-cameras" />
        <RouterButton name="My Gallery" to="/my-gallery" />
      </div> */}
    </div>
  );
}

export default ElysiumSection;
