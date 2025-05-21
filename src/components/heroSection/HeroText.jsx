"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const MotionH2 = motion("h2");
const MotionH1 = motion("h1");
const MotionP = motion("p");

export const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <MotionH2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Software Engineer
      </MotionH2>
      <MotionH2
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
      >
        Rudy Aldana
      </MotionH2>
      <MotionP
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        Passionate about building performant web apps with <br />
        React, Node.js, and modern tools.
      </MotionP>
    </div>
  );
};
