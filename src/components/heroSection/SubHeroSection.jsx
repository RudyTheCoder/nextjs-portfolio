import React from "react";

export const SubHeroSection = () => {
  return (
    <div className="w-full border-y border-lightGrey text-lightGrey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-brown ">
      <p>Problem Solver</p>
      <p className="md:block sm:hidden">Quick Learner</p>
      <p className="md:block sm:hidden">Collaborative Teammate</p>
    </div>
  );
};
