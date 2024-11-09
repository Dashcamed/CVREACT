import React from "react";

const AccordionProyects = ({ id, name, type, description, imgUrl, url }) => {
  return (
    <div className="collapse collapse-plus bg-base-200 mb-3 lg:w-3/5">
      <input type="radio" name={id} />
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{name}</div>
      <div className="collapse-content">
        <div className="card bg-base-100 image-full w-fit shadow-xl">
          <figure>
            <img src={imgUrl} alt={name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{type}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">
                <a href={url} target="_blank">
                  Ver sitio
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccordionProyects;
