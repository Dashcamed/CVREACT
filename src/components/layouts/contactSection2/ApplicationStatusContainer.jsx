import React from "react";
import ApplicationStatus from "./applicationStatus.jsx";
import { useForm } from "react-hook-form";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../../configFirebase";
import { useState, useEffect } from "react";
import LoadingPage from "../../pages/loadingPage/LoadingPage.jsx";
import { useLanguage } from "../../../context/LanguageContext.jsx";

const ApplicationStatusContainer = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);
  const [messageId, setMessageId] = useState(null);
  const [messageBody, setMessageBody] = useState(null);
  const [messageStatus, setMessageStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, "pages", "applicationStatus");
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        setContent(docSnapshot.data()[language]);
      }
    };
    fetchContent();
  }, [language]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setIsLoading(true);

    try {
      const refCollection = query(
        collection(db, "contactMessages"),
        where("client.email", "==", data.email)
      );

      const querySnapshot = await getDocs(refCollection);

      if (!querySnapshot.empty) {
        const doc = querySnapshot.docs[0];
        setMessageId(doc.id);
        setMessageBody(doc.data());
        setMessageStatus(doc.data().status);
      } else {
        setMessageId(null);
        setMessageBody(null);
      }
    } catch (error) {
      console.error("Error fetching documents: ", error);
      setMessageId(null);
      setMessageBody(null);
      setMessageStatus(null);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading || !content) {
    return <LoadingPage />;
  }
  let childProps = {
    content,
    messageId,
    messageBody,
    messageStatus,
    handleSubmit,
    onSubmit,
    register,
    errors,
  };
  return <ApplicationStatus {...childProps} />;
};

export default ApplicationStatusContainer;
