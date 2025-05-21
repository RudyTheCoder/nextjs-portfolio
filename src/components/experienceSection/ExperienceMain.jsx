"use client";

import React from "react";
import { ExperienceText } from "./ExperienceText";
import { AllExperience } from "./AllExperience";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const MotionDIV = motion("div");

export const ExperienceMain = () => {
  return (
    <div id="experience" className="max-w-[1200px] mx-auto px-4">
      <MotionDIV
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ExperienceText />
      </MotionDIV>
      <MotionDIV
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <AllExperience />
      </MotionDIV>
    </div>
  );
};
