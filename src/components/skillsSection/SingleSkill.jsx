import React from "react";

export const SingleSkill = ({ imgSVG, text }) => {
  return (
    <div className="hover:-translate-y-10 transition-all duration-500">
      <div className="flex flex-col items-center gap-2 relative">
        <div className="bg-white text-cyan h-[100px] w-[100px] flex items-center justify-center rounded-full hover:text-darkGrey hover:scale-105 transform transition-all duration-500 text-6xl border-4 border-orange">
          {imgSVG}
        </div>
        <p className="text-white font-bold">{text}</p>
      </div>
      <div className=""></div>
      <div className="w-[100px] h-[200px] bg-orange absolute top-[50px] -z-10"></div>
    </div>
  );
};

// Questions:

// 1) So since we passed imgSVG and text as props, we can use them in the SingeSkill component and wrap
// them in curley braces?

// Yes, exactly! ✅
// Once you pass imgSVG and text as props to the SingleSkill component, you can access and use them inside
// the component using curly braces {}.

// ✅ Important Rule:
// Inside JSX, if you want to insert a variable or expression, you must wrap it in curly braces {}.

// 2) In regards to the key, even though we don't use they "key" prop in the SingleSkill component, we
// still need to use it because its required by React?

// Yes — you nailed it. ✅

// Even though you don't use the key prop inside the SingleSkill component, you still need to provide it
// when rendering a list in React.

// 🔥 Key is a special prop
// It cannot be accessed in the child component (like SingleSkill).
// It’s strictly for React’s virtual DOM diffing algorithm.
// If you need an identifier inside the component, you should pass a separate prop like id.

// ✅ Summary
// | Do you need key? | ✔️ Yes, always when rendering a list (using .map()) |
// | Do you use key inside the component? | ❌ No, it’s not passed as a regular prop |
// | Should it be unique? | ✔️ Ideally, yes — index is okay for static lists |
