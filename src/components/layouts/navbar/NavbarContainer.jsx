import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import { db } from "../../../configFirebase";
import { doc, getDoc } from "firebase/firestore";
import LoadingPage from "../../pages/loadingPage/LoadingPage";

const NavbarContainer = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, "pages", "navbar");
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
  return <Navbar content={content} />;
};

export default NavbarContainer;
