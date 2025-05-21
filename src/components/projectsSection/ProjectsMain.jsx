import React from "react";
import { ProjectsText } from "./ProjectsText";
import { SingleProject } from "./SingleProject";
const projects = [
  {
    name: "To Do List",
    year: "2022",
    align: "right",
    image: "/images/toDoList.png",
    link: "https://todolist-production-3ebf.up.railway.app",
  },
  {
    name: "Keeper App",
    year: "2024",
    align: "left",
    image: "/images/keeper.png",
    link: "#",
  },
];

export const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <ProjectsText />
      <div>
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
