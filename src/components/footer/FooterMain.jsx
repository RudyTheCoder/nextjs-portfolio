"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // ✅ add icons

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
];

export const FooterMain = () => {
  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-lightGrey mt-24"></div>

      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-lightGrey">Rudy Aldana</p>

        <div className="flex items-center gap-6">
          {/* Existing section links */}
          <ul className="flex gap-4 text-lightGrey text-xl">
            {links.map((item, index) => (
              <li key={index}>
                <a
                  href={`#${item.section}`}
                  className="hover:text-white transition-all duration-500 cursor-pointer"
                >
                  {item.link}
                </a>
              </li>
            ))}
          </ul>

          {/* NEW: Social links */}
          <div className="flex gap-4 text-lightGrey text-2xl">
            <a
              href="https://github.com/RudyTheCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-500"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rudyaldana/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-all duration-500"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2025 Rudy Aldana
      </p>
    </div>
  );
};
