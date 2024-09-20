import { useEffect, useState } from "react";
import { Hero } from "./Hero";
import { data } from "../../../data.js";

const HeroContainer = () => {
  const [heroContent, setHeroContent] = useState([]);

  useEffect(() => {
    const getHeroContent = new Promise((res, rej) => {
      let isLoged = true;
      if (isLoged) {
        res({ data });
      } else {
        rej({ message: "error" });
      }
    });
    getHeroContent
      .then((response) => {
        setHeroContent(response.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  const heroData = heroContent.find(({ id }) => id === "hero");

  return <Hero heroContent={heroData || {}} />;
};

export default HeroContainer;
