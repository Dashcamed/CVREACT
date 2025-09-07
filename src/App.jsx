import Hero from "./components/sections/Hero";
import ShowcaseSection from "./components/sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/sections/LogoSection";
import FeatureCards from "./components/sections/FeatureCards";
import ExperienceSection from "./components/sections/ExperienceSection";
import TechStack from "./components/sections/TechStack";
import Testimonials from "./components/sections/Testimonials";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/sections/Footer";
function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Testimonials />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
