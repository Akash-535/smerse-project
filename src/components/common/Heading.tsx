import React from "react";

interface headingProp {
  text?: string;
  myClass?: string;
  headingSpan?: string;
  mySpanClass?: string;
}
const Heading = ({ text, myClass, headingSpan, mySpanClass }: headingProp) => {
  return (
    <div className="relative">
      <h2
        className={`text-5xl font-black text-white tracking-[3px] relative z-10 leading-custom-md max-md:text-4xl ${myClass}`}
      >
        {text}
      </h2>
      <span
        className={`absolute text-5xl max-md:text-4xl leading-custom-md bg-gradient-to-t to-light-purple via-light-pink from-light-orange bg-clip-text text-transparent tracking-[3px] top-[-2.5%] -translate-x-[1.5px] max-md:top-[3%] ${mySpanClass}`}
      >
        {headingSpan}
      </span>
    </div>
  );
};

export default Heading;
