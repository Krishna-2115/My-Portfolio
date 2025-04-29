import React from "react";
import { useSpring, animated } from "react-spring";
import {
  FaGithub,
  FaLinkedin,
  FaFileAlt,
} from "react-icons/fa";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_URL,
} from "../constants";
import homeLogo from "/logo.svg"; // adjust path if needed
import Type from "./Type"; // assumes you have a Type component

export default function Home() {
  const fadeInLogo = useSpring({
    from: { opacity: 0, transform: "scale(0.8)" },
    to: { opacity: 1, transform: "scale(1)" },
    config: { tension: 180, friction: 14 },
  });

  const fadeInIcons = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    delay: 300,
  });

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-purple-900 to-black text-white px-4"
    >
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi There!{" "}
            <span role="img" aria-label="waving hand">
              👋🏻
            </span>
          </h1>
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">
            I'M{" "}
            <span className="text-purple-400 font-bold">
              Krishna
            </span>
          </h1>
          <div className="text-lg text-purple-200">
            <Type />
          </div>

          <animated.div
            style={fadeInIcons}
            className="flex justify-center lg:justify-start mt-6 space-x-6"
          >
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-white transition duration-300"
            >
              <FaGithub size={32} />
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-white transition duration-300"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-white transition duration-300"
            >
              <FaFileAlt size={32} />
            </a>
          </animated.div>
        </div>

        {/* Right: Image Section */}
        <animated.div
          style={fadeInLogo}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src={homeLogo}
            alt="Coding Illustration"
            className="max-h-[450px] w-auto object-contain"
          />
        </animated.div>
      </div>
    </div>
  );
}
