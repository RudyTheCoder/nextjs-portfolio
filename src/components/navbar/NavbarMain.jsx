"use client";

import React from "react";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarLinks } from "./NavbarLinks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <nav className="max-w-[1300px] mx-auto w-full  px-4 fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
      <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
        <div className="flex-none">
          <NavbarLogo />
        </div>
        <div className={`${menuOpen ? "sm:block" : "sm:hidden"} lg:block`}>
          <NavbarLinks />
        </div>
      </div>
      {/* Hamburger Menu */}
      <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-orange border-[0.5px]">
        <button
          className="text-2xl p-3 border border-orange-50 rounded-full text-white"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu size={24} className="cursor-pointer" />
        </button>
      </div>
    </nav>
  );
};

// Questions:

// 1a) How does useState work?

// 🔧 What is useState?
// useState is a React Hook that allows you to add state to a functional component.

// Before hooks, only class components could hold state. But with useState, you can use state in function components,
// which is the modern way to write React apps.

// 1b) What is the difference between functional components and class components?

// | Functional Component                          | Class Component                                                                     |
// | --------------------------------------------- | ----------------------------------------------------------------------------------- |
// | A plain JavaScript function that returns JSX. | A JavaScript class that extends `React.Component` and includes a `render()` method. |

// A note to myself: Since the modern way of using Hooks is with functional components, I will just ignore the idea of hooks
// with class components.

// 1c) const [stateVariable, setStateVariable] = useState(initialValue);

// stateVariable: the current value of the state.
// setStateVariable: a function you call to update the state.
// initialValue: the starting value of the state.

// 2a) In regards to this example:

// import { useState } from 'react';

// function Counter() {
// const [count, setCount] = useState(0); // start count at 0

// return ( <div> <p>You clicked {count} times</p>
// <button onClick={() => setCount(count + 1)}>Click me</button> </div>
// );
// }

// So setCount is the function you call to update the state. And we defined the function here below?

// <button onClick={() => setCount(count + 1)}>Click me</button>

// ✅ Yes — setCount is the function we call to update the state.
// We get setCount from this line:

// That line does two things:
// const [count, setCount] = useState(0);

// 1. Creates a state variable named count, with an initial value of 0.
// 2. Gives us a function called setCount that lets us update count.

// 🔁 Where the function is used
// You're not defining setCount yourself — React gives it to you automatically when you call useState.

// 💡 Why we use an arrow function
// We wrap setCount(count + 1) in () => {} so it doesn't run immediately. Instead, it runs only when the button is clicked.

// 🧠 Summary
// 1. useState gives you both count (the value) and setCount (the updater).
// 2. You call setCount(...) inside an arrow function so it updates on user interaction (not right away).
// 3. React automatically re-renders the component with the new state after setCount is called.

// 2b) im confused. When you say "Gives us a function called setCount that lets us update count." We are naming the
// function "setCount", correct?

// Yes, correct. We are choosing the names count and setCount.

// React doesn’t force those names — they’re just variables that we’re destructuring from the array returned by
// useState.

// 2c) As for this part:

// <button onClick={() => setCount(count + 1)}>Click me</button>

// we are the using the event listener "onClick" and calling the anonymous function that updates calls the
// function setCount and updates the count variable?

// Yes, Rudy — you're absolutely right, and your understanding is on point!

// ✅ What’s happening:
// 1. onClick={...} is a React prop that acts like an event listener.
//  - Just like in plain JavaScript:
// element.addEventListener("click", someFunction)

// 2. () => setCount(count + 1) is an anonymous arrow function.
//  - It doesn't run immediately — it waits for the click.

// 3. When the button is clicked, that anonymous function is executed, and it:
//  - Calls setCount(count + 1)
//  - This updates the value of count to be one higher

// 4. React then re-renders the component with the updated count.

// 2d) So is onClick and event listener or a prop here?

// Excellent question, Rudy — and the answer is both, depending on how you look at it:

// ✅ In React terms:
// onClick is a prop.

// You're passing a prop named onClick to the <button> component.
// This is similar to passing any other prop like className, type, etc.
// React knows that when it sees an onClick prop on a DOM element, it should attach an event listener under the hood.

// ✅ In browser/JavaScript terms:
// onClick becomes an event listener.

// React translates your onClick={...} prop into a real DOM event listener using addEventListener('click', ...).
// So functionally, yes — it's an event listener.

// | Perspective     | What it is                                    |
// | --------------- | --------------------------------------------- |
// | **React**       | A prop you pass to the element                |
// | **Browser/DOM** | An event listener that React attaches for you |

// 2e) So since it’s a prop, can I name it something else other than onClick?

// No, you can't rename onClick if you're attaching it to a regular HTML element like <button>.

// Why?
// React uses specific prop names like onClick, onChange, onSubmit, etc., to know which event listeners
// to hook up to the DOM.

// React will not attach any event listener — whenIClick is just a random prop to React and the browser ignores it.

// Exception: Custom Components
// If you’re making your own component:

// function MyButton({ whenIClick }) {
//   return <button onClick={whenIClick}>Click me</button>;
// }

// Then this works:

// <MyButton whenIClick={() => console.log("Custom click")} />

// Because you're naming the prop whenIClick inside your own component, and using it correctly on a real <button>.

// ✅ Summary
// 1. onClick must be named exactly that for built-in HTML elements like <button>, <div>, etc.
// 2. You can use any name for props in your custom components, but you still need to wire them correctly inside.

// 2f) so we have a function called setCount but we call it using an anonymous function?

// Exactly, Rudy — and let’s break it down even more clearly so it clicks 💡:

// 🔍 What’s happening:
// 1. setCount is the function that updates your state.
// 2. You don’t want it to run immediately — you want it to run only when the button is clicked.
// 3. So you wrap it in an anonymous arrow function: () => setCount(count + 1)

// | What you're doing                       | Why                                       |
// | --------------------------------------- | ----------------------------------------- |
// | Writing `setCount` inside `()` => {}    | So it only runs on click                  |
// | Using an anonymous function             | To delay calling `setCount` until clicked |
// | Calling `setCount(count + 1)` inside it | To update the state                       |

// 3a) Explain this part of the code:

// const [menuOpen, setMenuOpen] = useState(false);
// const toggleMenu = () => setMenuOpen((prev) => !prev);

// toggleMenu function

// This is a small helper function that toggles the state of menuOpen.

// 1. prev represents the previous value of menuOpen.
// 2. !prev flips it:
//    - If menuOpen was false, it becomes true
//    - If it was true, it becomes false

// This function gets called when the hamburger button is clicked.

// 3b) breakdown this syntax:

// const toggleMenu = () => setMenuOpen((prev) => !prev);
// This is using arrow function syntax and a function inside a function, so we'll go in layers.

// ✅ 1. const toggleMenu = () => {...}
// This creates a function named toggleMenu using an arrow function.

// It’s the same as writing:
// function toggleMenu() {
//   // do something
// }

// But written in a shorter arrow function form.

// ✅ 2. setMenuOpen(...)
// This is calling the state update function from React’s useState.

// - setMenuOpen updates the value of menuOpen
// - It can take:

//      - A direct value: setMenuOpen(true)
//      - Or a function: setMenuOpen(prev => !prev) ← this is what you're doing

// ✅ 3. (prev) => !prev
// This is an arrow function used to calculate the new state based on the previous state (prev).

// So this:
// (prev) => !prev

// Means:

// - Take the previous value of menuOpen
// - Flip it using ! (logical NOT)
//       - !false becomes true
//       - !true becomes false

// 💡 Equivalent Expanded Version
// To help visualize what it's doing:

// const toggleMenu = () => {
//   setMenuOpen(function(prev) {
//     return !prev;
//   });
// };

// 3c) The bit of code below uses two arrows. Does this mean we are defining two arrow functions?

// () => setMenuOpen((prev) => !prev);

// Great question! It looks like two arrow functions are being defined — but actually, it's only one
// function (toggleMenu) that uses another function as an argument.

// ✅ Outer function:

// () => ...

// This is the outer arrow function — you can think of this as:

// const toggleMenu = () => {
//   // do something here
// };

// This defines a function that will be called, for example, when a user clicks a button.

// ✅ Inner function:

// (prev) => !prev

// This is a callback function being passed as an argument to setMenuOpen.

// This function takes in the previous state (prev) and returns the opposite of it.

// 🔍 So are there two arrow functions?
// ✅ Technically yes, there are two arrow functions.

// But:

// Only one is being defined directly (toggleMenu)
// The second one is just a function passed as an argument to setMenuOpen

// 🔁 Visual analogy
// It’s kind of like saying:

// function toggleMenu() {
//   setMenuOpen(function(prev) {
//     return !prev;
//   });
// }

// 3d) That is confusing

// Think of this like a sentence:

// "When someone calls toggleMenu, update the state by flipping the current value."

// 🔹 Step 1: The outer function

// const toggleMenu = () => { ... }

// This defines a function named toggleMenu.

// You call it when the user clicks the hamburger icon.

// 🔹 Step 2: What does toggleMenu do?

// setMenuOpen((prev) => !prev)

// This tells React to update the value of menuOpen.

// But instead of setting it to true or false directly, we give it a function:

// (prev) => !prev

// This inner function:

// Takes the previous value (prev)
// Returns the opposite (if it was false, return true)
