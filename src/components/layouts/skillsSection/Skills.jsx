import React from "react";
import Accordion from "../../common/accordions/Accordion";
import AccordionProyects from "../../common/accordions/AccordionProyects";
import AvatarPortrait from "../../common/avatars/AvatarPortrait";
import AvatarPortrait2 from "../../common/avatars/AvatarPortrait2";

const Skills = ({ content }) => {
  return (
    <section className="bg-gradient-to-b from-base-100 via-base-300 to-base-100 h-fit flex flex-col items-center space-y-6 transition ease-in-out animate-fade-in">
      <div className="flex items-center space-x-4">
        <h2 className="text-3xl text-center lg:text-5xl">{content.title1}</h2>
        <AvatarPortrait />
      </div>
      <div className="w-full max-w-xl">
        <Accordion content={content} />
      </div>
      <div className="flex items-center space-x-4">
        <AvatarPortrait2 />
        <h2 className="text-3xl text-center lg:text-5xl">{content.title2}</h2>
      </div>
      <div className="w-full max-w-xl">
        <AccordionProyects content={content} />
      </div>
    </section>
  );
};

export default Skills;
