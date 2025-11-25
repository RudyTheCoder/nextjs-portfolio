"use client";

import React from "react";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const MotionDIV = motion.create("div");

export const SingleProject = ({ name, year, align, image, link }) => {
  const isLeft = align === "left";

  return (
    <MotionDIV
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.7 }}
      className={`flex w-full items-center gap-8 sm:flex-col-reverse ${
        isLeft ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* TEXT BLOCK */}
      <div
        className={`flex flex-col gap-2 sm:items-center ${
          isLeft ? "md:items-end" : "md:items-start"
        }`}
      >
        <h2 className="md:text-3xl sm:text-2xl text-orange">{name}</h2>
        <h2 className="text-xl font-thin text-white font-special">{year}</h2>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-lg text-cyan hover:text-orange transition-all duration-500 cursor-pointer"
        >
          View
          <BiSolidRightTopArrowCircle />
        </a>
      </div>

      {/* IMAGE BLOCK */}
      <div className="max-h-[220px] max-w-[400px] rounded-xl overflow-hidden hover:scale-110 transform transition-all duration-500 relative border border-white">
        <div className="w-full h-full bg-cyan opacity-50 absolute top-0 left-0 hover:opacity-0 transition-all duration-500 md:block sm:hidden"></div>
        <img src={image} alt="Project Image" className="w-full h-full" />
      </div>
    </MotionDIV>
  );
};
