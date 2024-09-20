import React from "react";

export const Hero = ({ heroContent }) => {
  console.log(heroContent);
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row pb-20 sm:pb-0">
        <img
          src={heroContent.imgUrl}
          className="size-56 sm:size-80 lg:size-96 rounded-lg hover:drop-shadow-2xl"
        />
        <div>
          <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold">
            {heroContent.h1}
          </h1>
          <p className="py-6 xl:text-xl">{heroContent.intro}</p>
          <button className="btn btn-primary">{heroContent.button}</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
