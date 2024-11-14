import React from "react";

const AvatarPortrait = () => {
  return (
    <div className="avatar">
      <div className="w-28 lg:w-48 rounded p-1">
        <img
          className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 hover:drop-shadow-[0_5px_5px_rgba(255,255,255,0.25)]"
          src="https://res.cloudinary.com/dpisx0ysb/image/upload/v1726799617/16a74f21-26f0-4bcd-a2c3-d7219af4b842_lvp8kn.webp"
        />
      </div>
    </div>
  );
};

export default AvatarPortrait;
