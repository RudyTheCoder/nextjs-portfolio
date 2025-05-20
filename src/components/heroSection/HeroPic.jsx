import React from "react";
import { GiCircle } from "react-icons/gi";
import { CgSpinner } from "react-icons/cg";
import { CgSpinnerTwoAlt } from "react-icons/cg";

export const HeroPic = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <img
        src="/images/LinkedInPicture.png"
        alt="Rudy Aldana"
        className="max-h-[450px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <CgSpinnerTwoAlt className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </div>
  );
};
