import React from "react";

const Accordion = ({ content }) => {
  return (
    <>
      <div className="collapse collapse-plus bg-inherit mb-3">
        <input type="radio" />
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          {content.accordion1.h1}
        </div>
        <div className="collapse-content">
          <p>- {content.accordion1.text}</p>
          <p>- {content.accordion1.text2}</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-inherit mb-3">
        <input type="radio" />
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          {content.accordion2.h1}
        </div>
        <div className="collapse-content">
          <p>- {content.accordion2.text}</p>
          <p>- {content.accordion2.text2}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
