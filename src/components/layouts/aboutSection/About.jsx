import React from "react";
import AvatarPortrait3 from "../../common/AvatarPortrait3";
import MockupCode from "../../common/MockupCode";

const About = ({ content }) => {
  return (
    <div className="h-dvh grid grid-cols-1 mx-2 sm:grid-cols-2">
      <div className="content-center justify-self-center">
        <AvatarPortrait3 />
      </div>
      <div className="content-center justify-self-center">
        <MockupCode content={content} />
      </div>
    </div>
  );
};

export default About;
