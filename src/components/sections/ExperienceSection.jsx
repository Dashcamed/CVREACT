import React from "react";
import TitleHeader from "../TitleHeader";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full md:mt-40 mt-20 section-padding xl:px-0"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Experiencia Profesional"
          sub="💼 Mi experiencia laboral"
        />
        <div className="mt-32 relative">
          <div className="relative z-50 xl:space-y-32 space-y-10">
            {/* {expCards} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
