"use client";

import React from "react";
import { AboutMeText } from "./AboutMeText";
import { AboutMeImage } from "./AboutMeImage";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const MotionDIV = motion("div");

export const AboutMeMain = () => {
  return (
    <MotionDIV
      id="about"
      className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
    >
      <MotionDIV
        variants={fadeIn("right", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <AboutMeText />
      </MotionDIV>
      <MotionDIV
        variants={fadeIn("left", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <AboutMeImage />
      </MotionDIV>
    </MotionDIV>
  );
};
