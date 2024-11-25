import NavbarContainer from "./components/layouts/navbar/NavbarContainer";
import FooterContainer from "./components/layouts/footer/FooterContainer";
import AboutPage from "./components/pages/about/AboutPage";
import HomePage from "./components/pages/homeContainer/HomePage";
import SkillsPage from "./components/pages/skills/SkillsPage";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import ContactPage from "./components/pages/contact/ContactPage";
import { AlertProvider } from "./context/AlertContext";

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AlertProvider>
          <NavbarContainer />
          <Routes>
            <Route path={"/"} element={<HomePage />}></Route>
            <Route path={"/About"} element={<AboutPage />}></Route>
            <Route path={"/Skills"} element={<SkillsPage />}></Route>
            <Route path={"/Contact"} element={<ContactPage />}></Route>
          </Routes>
          <FooterContainer />
        </AlertProvider>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
