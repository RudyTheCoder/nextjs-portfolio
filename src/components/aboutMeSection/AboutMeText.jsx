import React from "react";

export const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        Software Engineer with a strong technical foundation in Python,
        JavaScript, and C++, along with AWS certification. Skilled in
        communicating complex ideas clearly and building user-focused tools
        through full-stack development and automation. Experienced in
        collaborating across teams, solving real-world problems, and eager to
        help customers succeed by bridging technology and business needs.
      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        My Projects
      </button>
    </div>
  );
};
