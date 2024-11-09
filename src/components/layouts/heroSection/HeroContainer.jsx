import { useEffect, useState } from "react";
import { Hero } from "./Hero";
import { useLanguage } from "../../../context/LanguageContext.jsx";
import { db } from "../../../configFirebase.js";
import { doc, getDoc } from "firebase/firestore";

const HeroContainer = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, "pages", "home");
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        setContent(docSnapshot.data()[language]);
      }
    };
    fetchContent();
  }, [language]);

  if (!content) {
    return (
      <div>
        <h1>cargando...</h1>
      </div>
    );
  }

  return <Hero content={content} />;
};

export default HeroContainer;
