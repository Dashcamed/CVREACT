import Contact from "./Contact";
import { useForm } from "react-hook-form";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../configFirebase";
import { useState } from "react";
import LoadingPage from "../../pages/loadingPage/LoadingPage";

const ContactContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [messageId, setMessageId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (data) => {
    setIsLoading(true);

    const contactMessage = {
      client: data,
    };

    if (!data) {
      setIsLoading(false);
      return;
    }

    let refCollection = collection(db, "contactMessages");
    addDoc(refCollection, contactMessage)
      .then((res) => {
        setMessageId(res.id);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <LoadingPage />;
  }

  let childProps = {
    messageId,
    handleSubmit,
    onSubmit,
    register,
    errors,
  };
  return <Contact {...childProps} />;
};

export default ContactContainer;
