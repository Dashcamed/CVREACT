import React from "react";
import { Link } from "react-router-dom";

export const Hero = ({ content }) => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row pb-20 sm:pb-0">
        <img
          src={content.imgUrl}
          className="size-56 sm:size-80 lg:size-96 rounded-lg hover:drop-shadow-2xl"
        />
        <div>
          <h1 className="text-center lg:text-start text-4xl lg:text-5xl xl:text-7xl font-bold">
            {content.title}
          </h1>
          <p className="text-center lg:text-start py-6 xl:text-xl">
            {content.description}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link to={"/About"} className="btn btn-primary">
              {content.button}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
