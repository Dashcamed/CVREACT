import React from "react";
import Skills from "./Skills";
import AvatarPortrait from "../../common/AvatarPortrait";
import { data } from "../../common/accordionData";
import { data2 } from "../../common/accordionProyectsData";

const SkillsContainer = () => {
  return (
    <div className="h-fit mx-4 flex flex-col mt-10">
      <div className="flex flex-row justify-center items-center">
        <h2 className="text-3xl lg:text-5xl px-4">Skills</h2>
        <AvatarPortrait />
      </div>
      <div className="flex flex-col items-center">
        <Skills data={data} data2={data2} />
      </div>
    </div>
  );
};

export default SkillsContainer;
