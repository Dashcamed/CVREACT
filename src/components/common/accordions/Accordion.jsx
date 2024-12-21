import React from "react";

const AccordionItem = ({ item }) => (
  <div className="collapse collapse-plus bg-inherit mb-3">
    <input type="radio" />
    <input type="checkbox" />
    <div className="collapse-title text-xl xl:text-3xl font-medium">
      {item.h1}
    </div>
    <div className="collapse-content">
      <p className="text-lg xl:text-xl">- {item.text}</p>
      <p className="text-lg xl:text-xl">- {item.text2}</p>
    </div>
  </div>
);

const Accordion = ({ content }) => {
  const items = [content.accordion1, content.accordion2];
  return (
    <>
      {items.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </>
  );
};

export default Accordion;
