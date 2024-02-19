import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Full Stack Developer.", "Python Programmer.", "Java Programmer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4> */}
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Nitin Kumar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          As a dedicated full-stack developer, I bring a versatile skill set
          encompassing React, Node, SQL, Python, and Java. My commitment to
          building end-to-end web applications is reflected in my comprehensive
          knowledge and experience across these technologies.
        </p>
      </div>
      {/* Media */}
      <Media />
      <div>
        <button 
        class="bg-black text-white border hover:border-red-500 py-3 px-6 ml-4 rounded"
        onClick={()=> window.open("https://drive.google.com/file/d/1NuoMaorPfS76-BAZpZqV6QonYpnJw9O8/view?usp=sharing")}>
          Download CV
        </button>
      </div>
    </div>
  );
};

export default LeftBanner;
