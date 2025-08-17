import Hero from "./components/sections/Hero";
import ShowcaseSection from "./components/sections/ShowcaseSection";
import NavBar from "./components/NavBar";
import LogoSection from "./components/LogoSection";
function App() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <ShowcaseSection />
        <LogoSection />
      </main>
    </>
  );
}

export default App;
