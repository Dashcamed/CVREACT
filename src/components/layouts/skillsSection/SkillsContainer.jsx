import React from "react";
import Skills from "./Skills";
import { useLanguage } from "../../../context/LanguageContext";
import { useState, useEffect } from "react";
import { db } from "../../../configFirebase";
import { doc, getDoc } from "firebase/firestore";
import LoadingPage from "../../pages/loadingPage/LoadingPage";

const SkillsContainer = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, "pages", "skills");
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
  return <Skills content={content} />;
};

export default SkillsContainer;
