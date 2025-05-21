"use client";

import React from "react";
import { GiCircle } from "react-icons/gi";
import { CgSpinner } from "react-icons/cg";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const MotionDIV = motion("div");

export const HeroPic = () => {
  return (
    <MotionDIV
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="/images/LinkedInPicture.png"
        alt="Rudy Aldana"
        className="max-h-[450px] w-auto"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <CgSpinnerTwoAlt className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </MotionDIV>
  );
};
