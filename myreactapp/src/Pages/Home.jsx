import "./Home.css";
import HeroSection from "../Components/HeroSection.jsx";
import MissionSection from "../Components/MissionSection.jsx";
import ElysiumSection from "../Components/ElysiumSection.jsx";
import HomeGallerySection from "../Components/HomeGallerySection.jsx";
import ContactUsSection from "../Components/ContactUsSection.jsx";

function Home() {
  return (
    <div>
      <HeroSection />
      <MissionSection />
      <ElysiumSection />
      <HomeGallerySection />
      <ContactUsSection />
    </div>
  );
}

export default Home;
