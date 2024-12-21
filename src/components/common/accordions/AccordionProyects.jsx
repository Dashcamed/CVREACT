import React from "react";

const AccordionItem = ({ item }) => (
  <div className="collapse collapse-plus bg-inherit mb-3">
    <input type="radio" />
    <input type="checkbox" />
    <div className="collapse-title text-xl xl:text-3xl font-medium">
      {item.h1}
    </div>
    <div className="collapse-content flex flex-col">
      <div className="card bg-base-100 image-full w-fit shadow-xl justify-self-center">
        <figure>
          <img src={item.imgUrl} alt={item.h1} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{item.type}</h2>
          <p>{item.description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              <a href={item.url} target="_blank">
                {item.button}
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const AccordionProyects = ({ content }) => {
  const items = [content.accordion3, content.accordion4, content.accordion5];

  return (
    <>
      {items.map((item, index) => (
        <AccordionItem key={index} item={item} />
      ))}
    </>
  );
};

export default AccordionProyects;
