import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { SingleSkill } from "./SingleSkill";

// Each object inside the skills array is a key-value pair structure.
// Here’s a breakdown:

// So skill and icon are the keys, and "HTML" and FaHtml5 are their values.

// {
//   skill: "HTML",       // key: "skill", value: "HTML" (a string)
//   icon: FaHtml5        // key: "icon", value: FaHtml5 (a React component)
// }

// Each element in the array is a separate object that follows this structure. This setup allows you to easily loop over
// the array and use both the name (skill) and its visual representation (icon) in your UI.

const skills = [
  {
    skill: "HTML",
    icon: FaHtml5,
  },
  {
    skill: "CSS",
    icon: FaCss3Alt,
  },
  {
    skill: "JavaScript",
    icon: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icon: FaReact,
  },
  {
    skill: "NextJS",
    icon: SiNextdotjs,
  },
  {
    skill: "TailwindCSS",
    icon: RiTailwindCssFill,
  },
  {
    skill: "Python",
    icon: FaPython,
  },
];

// .map() is a JavaScript method that loops through the array and returns a new array of JSX elements.
// For each item in the array, it returns a <SingleSkill /> React component.

export const AllSkills = () => {
  return (
    <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
      {skills.map((item, index) => {
        //const Icon = item.icon;
        return (
          <SingleSkill key={index} text={item.skill} imgSVG={<item.icon />} />
        );
      })}
    </div>
  );
};

//Questions:

// 1) How does the map function work?

// The .map() function in JavaScript is used to loop through an array and transform each element, returning
// a new array with the results.

// 2) what are the parameters we can pass inside of a map?

// The .map() function takes a callback function as its argument, and that callback can accept up to three parameters:

// array.map((element, index, array) => {
//   // return something
// });

// | Parameter | Description                                           |
// | --------- | ----------------------------------------------------- |
// | `element` | The current item in the array                         |
// | `index`   | *(optional)* The index (position) of the current item |
// | `array`   | *(optional)* The entire array being mapped over       |

// 3) So in regards to this part:

// <SingleSkill
//   key={index}
//   text={item.skill}
//   imgSVG={<Icon />}
// />

// The key is the index and because our skills array is static we can just use
// this as the id?

// Correct! You're using the index of each skill in the array as the key, which is
// perfectly acceptable because your skills array is static — meaning:

// You're not adding, removing, or reordering the items dynamically.
// The order and number of items will always stay the same on each render.

// 🧠 Why React wants a key in the first place:
// React uses key to keep track of elements in a list, so that when something changes,
// it can efficiently re-render only the changed items.

// 4a) So here we are rendering a SingleSkill component and passing in props?

// <SingleSkill key={index} text={item.skill} imgSVG={<item.icon />} />

// Yes, correct.

// 4b) So key, text and imgSVG are the prop names?

// Yes, correct.

// | Prop Name | What it holds                                    | Purpose                                    |
// | --------- | ------------------------------------------------ | ------------------------------------------ |
// | `key`     | The index of the item in the array               | Helps React identify this item in the list |
// | `text`    | The skill name, like `"HTML"`                    | Used in `SingleSkill` to display the label |
// | `imgSVG`  | The icon component rendered as JSX `<FaHtml5 />` | Used to visually display the skill icon    |
