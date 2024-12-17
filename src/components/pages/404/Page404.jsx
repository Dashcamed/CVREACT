import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="hero bg-base-300 min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Error 404</h1>
          <p className="py-6">Page not found</p>
          <Link to={"/"} className="btn btn-primary">
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page404;
