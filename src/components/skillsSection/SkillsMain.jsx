"use client";

import React from "react";
import { SkillsText } from "./SkillsText";
import { AllSkills } from "./AllSkills";
import { AllSkillsSM } from "./AllSkillsSM";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const MotionDIV = motion.create("div");

export const SkillsMain = () => {
  return (
    <div id="skills">
      <div className="max-w-[1200px] px-4 mx-auto min-h-[600px] relative overflow-hidden">
        <MotionDIV
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0 }}
        >
          <SkillsText />
        </MotionDIV>

        <div className="bottom-[50px] absolute left-[50%] -translate-x-[50%] sm:hidden lg:block ">
          <AllSkills />
        </div>
        <div className="sm:block lg:hidden">
          <AllSkillsSM />
        </div>
      </div>
    </div>
  );
};
