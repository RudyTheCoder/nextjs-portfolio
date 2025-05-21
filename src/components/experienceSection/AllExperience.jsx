import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { SingleExperience } from "./SingleExperience";

const experiences = [
  {
    job: "Major - Computer Science",
    company: "Cal State East Bay",
    date: "2019 - 2023",
    responsibilities: [
      "Completed coursework in data structures, algorithms, and web development.",
      "Developed academic projects using C++, Python, and JavaScript.",
      "Collaborated with peers to debug, refactor, and enhance code for functionality and performance.",
    ],
  },
  {
    job: "Third Party Proposition Player",
    company: "Blackstone Gaming",
    date: "2015 - Present",
    responsibilities: [
      "Interacted with a wide range of customers in high-pressure environments, maintaining professionalism.",
      "Demonstrated strong communication skills",
      "Collaborated with teammates to ensure smooth game flow and customer satisfaction.",
    ],
  },
  {
    job: "Independent Developer",
    date: "2023 - Present",
    responsibilities: [
      "Built and deployed full-stack applications using Node.js, React, and MongoDB.",
      "Automated cover letter generation using APIs and Python scripting.",
      "Explored modern frameworks like Next.js to develop dynamic and SEO-friendly web apps.",
    ],
  },
];

export const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => (
        <React.Fragment key={index}>
          <SingleExperience experience={experience} />
          {index < 2 ? (
            <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
          ) : null}
        </React.Fragment>
      ))}
    </div>
  );
};
