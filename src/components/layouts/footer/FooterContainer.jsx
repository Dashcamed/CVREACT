import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import { footerLinks } from "./footerLinks";

const FooterContainer = () => {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const getLinks = new Promise((res, rej) => {
      let isLoged = true;
      if (isLoged) {
        res({ footerLinks });
      } else {
        rej({ message: "error" });
      }
    });
    getLinks
      .then((response) => {
        setLinks(response.footerLinks);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return <Footer links={links} />;
};

export default FooterContainer;
