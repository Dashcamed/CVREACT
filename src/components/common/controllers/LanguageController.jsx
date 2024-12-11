import { useLanguage } from "../../../context/LanguageContext";

const LanguageController = () => {
  const { language, toggleLanguage } = useLanguage();
  return (
    <button onClick={toggleLanguage} className="btn btn-ghost ml-1">
      {language === "es" ? (
        <img
          src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1733960641/icons8-circular-espa%C3%B1a-32_zqf0zm.png"
          alt=""
        />
      ) : (
        <img
          src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1733960641/icons8-circular-de-ee-uu-32_gy5bgl.png"
          alt=""
        />
      )}
    </button>
  );
};

export default LanguageController;
