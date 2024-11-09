import React from "react";
import AvatarPortrait3 from "../../common/AvatarPortrait3";
import MockupCode from "../../common/MockupCode";

const About = () => {
  return (
    <div className="h-fit grid sm:grid-cols-1 sm:grid-rows-1 lg:grid-cols-2 lg:grid-rows-1 py-8 items-center">
      <div className="flex flex-row justify-center items-center pt-4">
        <AvatarPortrait3 />
      </div>
      <div className="flex flex-row sm:justify-center lg:flex-grow items-center pt-4 mx-auto">
        <MockupCode />
      </div>
    </div>
  );
};

export default About;
