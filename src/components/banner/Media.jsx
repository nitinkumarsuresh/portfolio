import React from "react";
import {
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaCode,
  FaJava,
} from "react-icons/fa";
import { SiDjango, SiNextdotjs, SiPython } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaLinkedinIn
              className="animate-bounce"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/nitin-kumar-s-a56828217/"
                )
              }
            />
          </span>
          <span className="bannerIcon">
            <FaGithub
              className="animate-bounce"
              onClick={() => window.open("https://github.com/nitinkumarsuresh")}
            />
          </span>
          <span className="bannerIcon">
            <FaCode
              className="animate-bounce"
              onClick={() =>
                window.open("https://leetcode.com/nitin_kumar_04/")
              }
            />
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <SiPython className="animate-bounce" />
          </span>
          <span className="bannerIcon">
            <FaJava className="animate-bounce" />
          </span>
          <span className="bannerIcon">
            <FaReact className="animate-bounce" />
          </span>
          <span className="bannerIcon">
            <SiDjango className="animate-bounce" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
