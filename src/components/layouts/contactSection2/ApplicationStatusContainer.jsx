import React from "react";
import ApplicationStatus from "./ApplicationStatus.jsx";
import { useForm } from "react-hook-form";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../../configFirebase";
import { useState } from "react";
import LoadingPage from "../../pages/loadingPage/LoadingPage.jsx";

const ApplicationStatusContainer = () => {
  const [messageId, setMessageId] = useState(null);
  const [messageBody, setMessageBody] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

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
      } else {
        setMessageId(null);
        setMessageBody(null);
      }
    } catch (error) {
      console.error("Error fetching documents: ", error);
      setMessageId(null);
      setMessageBody(null);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) {
    return <LoadingPage />;
  }
  let childProps = {
    messageId,
    messageBody,
    handleSubmit,
    onSubmit,
    register,
    errors,
  };
  return <ApplicationStatus {...childProps} />;
};

export default ApplicationStatusContainer;
