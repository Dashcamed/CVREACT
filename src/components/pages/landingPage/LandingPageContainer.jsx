import React from "react";
import Navbar from "../../layouts/navbar/Navbar";
import HeroContainer from "../../layouts/heroSection/HeroContainer";
import FooterContainer from "../../layouts/footer/FooterContainer";

const LandingPageContainer = () => {
  return (
    <>
      <Navbar />
      <HeroContainer />
      <FooterContainer />
    </>
  );
};

export default LandingPageContainer;
