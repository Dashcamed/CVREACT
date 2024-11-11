import React from "react";

const MockupCode = ({ content }) => {
  return (
    <>
      <aside className="bg-base-300 text-white p-6 rounded-lg font-mono">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm ml-1">bash</p>
        </div>
        <div className="mt-4">
          <p className="text-primary-content lg:text-2xl">{content.bash}</p>
          <p className="text-primary-content lg:text-2xl">{content.bash1}</p>
          <p className="text-primary-content lg:text-2xl">{content.bash2}</p>
          <p className="text-primary-content lg:text-2xl">{content.bash3}</p>
          <p className="text-primary-content lg:text-2xl">{content.bash4}</p>
          <p className="underline text-success lg:text-2xl">
            <a href={content.github} target="_blank">
              Github
            </a>
          </p>
          <p className="underline text-success lg:text-2xl">
            <a href={content.linkedin} target="_blank">
              LinkedIn
            </a>
          </p>
          <p className="underline text-success lg:text-2xl">
            <a href={content.mailto}>Email</a>
          </p>
        </div>
      </aside>
    </>
  );
};

export default MockupCode;
