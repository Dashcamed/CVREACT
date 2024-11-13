import React from "react";
import AvatarPortrait3 from "../../common/avatars/AvatarPortrait3";
import MockupCode from "../../common/mockupCode/MockupCode";

const About = ({ content }) => {
  return (
    <div className="h-dvh bg-gradient-to-b from-base-100 via-base-300 to-base-100 grid grid-cols-1 sm:grid-cols-2">
      <div className="content-center justify-self-center">
        <AvatarPortrait3 />
      </div>
      <div className="content-center justify-self-center mx-2">
        <MockupCode content={content} />
      </div>
    </div>
  );
};

export default About;
