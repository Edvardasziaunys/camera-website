import "./AboutUs.css";
import AboutUsHero from "../Components/AboutUsHero.jsx";
import AboutUsContent from "../Components/AboutUsContent.jsx";
import ContactUsSection from "../Components/ContactUsSection.jsx";

function AboutUs() {
  return (
    <div>
      <AboutUsHero />
      <AboutUsContent />
      <ContactUsSection />
    </div>
  );
}

export default AboutUs;
