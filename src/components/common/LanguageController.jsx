import { useLanguage } from "../../context/LanguageContext";

const LanguageController = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button onClick={toggleLanguage} className="btn">
      {language === "es" ? "EN" : "ES"}
    </button>
  );
};

export default LanguageController;
