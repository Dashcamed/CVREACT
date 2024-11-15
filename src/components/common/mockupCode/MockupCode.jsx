import React from "react";

const MockupCode = ({ content }) => {
  return (
    <>
      <aside className="bg-inherit border border-primary-content p-6 rounded-lg font-mono">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm text-primary-content ml-1">bash.bio</p>
        </div>
        <div className="mt-4">
          <p className="text-primary-content prose lg:prose-xl">
            {content.bash}
          </p>
          <p className="text-primary-content prose lg:prose-xl">
            {content.bash1}
          </p>
          <p className="text-primary-content prose lg:prose-xl">
            {content.bash2}
          </p>
          <p className="text-primary-content prose lg:prose-xl">
            {content.bash3}
          </p>
          <p className="text-primary-content prose lg:prose-xl">
            {content.bash4}
          </p>
          <p className="underline prose lg:prose-xl">
            <a className="text-success" href={content.github} target="_blank">
              Github
            </a>
          </p>
          <p className="underline prose lg:prose-xl">
            <a className="text-success" href={content.linkedin} target="_blank">
              LinkedIn
            </a>
          </p>
          <p className="underline prose lg:prose-xl">
            <a className="text-success" href={content.mailto}>
              Email
            </a>
          </p>
        </div>
      </aside>
    </>
  );
};

export default MockupCode;
