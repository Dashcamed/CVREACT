import React from "react";
import Accordion from "../../common/Accordion";
import AccordionProyects from "../../common/AccordionProyects";
import AvatarPortrait2 from "../../common/AvatarPortrait2";

const Skills = ({ data, data2 }) => {
  return (
    <>
      {data.map((x) => {
        return <Accordion key={x.id} h1={x.h1} text={x.text} text2={x.text2} />;
      })}
      <div className="flex flex-row justify-center items-center py-4">
        <AvatarPortrait2 />
        <h2 className="text-3xl lg:text-5xl px-4">Proyectos</h2>
      </div>
      {data2.map((x) => {
        return (
          <AccordionProyects
            key={x.id}
            name={x.name}
            type={x.type}
            description={x.description}
            imgUrl={x.imgUrl}
            url={x.url}
          />
        );
      })}
    </>
  );
};

export default Skills;
