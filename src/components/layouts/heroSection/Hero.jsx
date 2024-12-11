import React from "react";
import { Link } from "react-router-dom";

export const Hero = ({ content }) => {
  return (
    <section className="hero bg-gradient-to-b from-base-100 via-base-300 to-base-100 min-h-screen transition ease-in-out animate-fade-in">
      <div className="hero-content flex-col lg:flex-row pb-20 sm:pb-0">
        <img
          src={content.imgUrl}
          className="size-56 sm:size-80 lg:size-96 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        />
        <div>
          <h1 className="text-center lg:text-start text-4xl lg:text-5xl xl:text-6xl font-bold capitalize hover:[text-shadow:_4px_4px_16px_oklch(var(--inc))] cursor-default delay-150 hover:scale-110 transition ease-linear">
            {content.title}
          </h1>
          <p className="text-center font-medium lg:text-start py-6 xl:text-xl prose lg:prose-xl">
            {content.description}
          </p>
          <div className="flex justify-center lg:justify-start">
            <Link to={"/About"} className="btn btn-primary">
              {content.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
