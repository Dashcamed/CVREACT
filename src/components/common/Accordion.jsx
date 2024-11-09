import React from "react";

const Accordion = ({ id, h1, text, text2 }) => {
  return (
    <>
      <div className="collapse collapse-plus bg-base-200 mb-3 lg:w-3/5">
        <input type="radio" name={id} />
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">{h1}</div>
        <div className="collapse-content">
          <p>- {text}</p>
          <p>- {text2}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
