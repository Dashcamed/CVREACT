import React, { useEffect, useState } from "react";
import About from "./About";
import { useLanguage } from "../../../context/LanguageContext";
import { db } from "../../../configFirebase";
import { doc, getDoc } from "firebase/firestore";
import LoadingPage from "../../pages/loadingPage/LoadingPage";

const AboutContainer = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, "pages", "about");
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        setContent(docSnapshot.data()[language]);
      }
    };
    fetchContent();
  }, [language]);

  if (!content) {
    return <LoadingPage />;
  }
  return <About content={content} />;
};

export default AboutContainer;
