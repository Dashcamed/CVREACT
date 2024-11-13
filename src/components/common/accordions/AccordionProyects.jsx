import React from "react";

const AccordionProyects = ({ content }) => {
  return (
    <>
      <div className="collapse collapse-plus bg-inherit mb-3">
        <input type="radio" />
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          {content.accordion3.h1}
        </div>
        <div className="collapse-content flex flex-col">
          <div className="card bg-base-100 image-full w-fit shadow-xl justify-self-center">
            <figure>
              <img
                src={content.accordion3.imgUrl}
                alt={content.accordion3.h1}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{content.accordion3.type}</h2>
              <p>{content.accordion3.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <a href={content.accordion3.url} target="_blank">
                    Ver sitio
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="collapse collapse-plus bg-inherit mb-3">
        <input type="radio" />
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          {content.accordion4.h1}
        </div>
        <div className="collapse-content flex flex-col">
          <div className="card bg-base-100 image-full w-fit shadow-xl justify-self-center">
            <figure>
              <img
                src={content.accordion4.imgUrl}
                alt={content.accordion4.h1}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{content.accordion4.type}</h2>
              <p>{content.accordion4.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  <a href={content.accordion4.url} target="_blank">
                    Ver sitio
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionProyects;
