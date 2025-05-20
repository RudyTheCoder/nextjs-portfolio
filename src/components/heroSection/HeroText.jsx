import React from "react";

export const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <h2 className="lg:text-2xl sm:text-xl uppercase text-lightGrey">
        Software Engineer
      </h2>
      <h1 className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase">
        Rudy Aldana
      </h1>
      <p className="text-lg mt-4 text-white">
        Passionate about building performant web apps with <br />
        React, Node.js, and modern tools.
      </p>
    </div>
  );
};
