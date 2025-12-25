"use client";

import React from "react";
import { ProjectsText } from "./ProjectsText";
import { SingleProject } from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const MotionDIV = motion.create("div");

const projects = [
  {
    name: "To Do List",
    year: "2023",
    align: "right",
    image: "/images/toDoList.png",
    link: "https://todolist-production-3ebf.up.railway.app",
  },
  {
    name: "Keeper App",
    year: "2024",
    align: "left",
    image: "/images/keeper.png",
    link: "https://keeper-production-c8b5.up.railway.app",
  },
  {
    name: "Casino Game Training Platform",
    year: "2025",
    align: "right",
    image: "/images/CasinoGame TrainingPlatform.png",
    link: "https://card-game-assessments-supabase.vercel.app/index.html",
  },
  {
    name: "Cover Letter Generator",
    year: "2025",
    align: "left",
    image: "/images/Cover Letter Generator.png",
    link: "https://cover-letter-flask-production.up.railway.app",
  },
];

export const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <MotionDIV
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </MotionDIV>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={`${item.name}-${item.year}`}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};
