import Contact from "./Contact";
import { useForm } from "react-hook-form";
import { addDoc, collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../configFirebase";
import { useState, useEffect } from "react";
import { useLanguage } from "../../../context/LanguageContext";
import LoadingPage from "../../pages/loadingPage/LoadingPage";

const ContactContainer = () => {
  const { language } = useLanguage();
  const [content, setContent] = useState(null);
  const [messageId, setMessageId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchContent = async () => {
      const docRef = doc(db, "pages", "contact");
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

  if (isLoading || !content) {
    return <LoadingPage />;
  }

  let childProps = {
    content,
    messageId,
    handleSubmit,
    onSubmit,
    register,
    errors,
  };
  return <Contact {...childProps} />;
};

export default ContactContainer;
