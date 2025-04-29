import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiPerplexity } from "react-icons/si";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  PERSONAL_WEBSITE_URL,
  CURRENT_YEAR,
  // PERPLEXITY_URL,
} from "../constants/index";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black via-purple-900 to-black text-white">
      <div className="flex flex-col items-center justify-center py-4 px-4 sm:flex-row sm:justify-between sm:py-6 sm:px-10">
        <span className="text-sm text-purple-300 sm:text-center">
          © {CURRENT_YEAR}{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={PERSONAL_WEBSITE_URL}
            className="hover:text-white transition-colors duration-300 font-semibold"
          >
            sarabaqla.dev
          </a>
        </span>
        <div className="flex mt-3 sm:mt-0 space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={GITHUB_URL}
            className="text-purple-400 hover:text-white transition-colors duration-300"
          >
            <FaGithub className="w-5 h-5" />
            <span className="sr-only">GitHub account</span>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={LINKEDIN_URL}
            className="text-purple-400 hover:text-white transition-colors duration-300"
          >
            <FaLinkedin className="w-5 h-5" />
            <span className="sr-only">LinkedIn account</span>
          </a>
          {/* <a
            target="_blank"
            rel="noopener noreferrer"
            href={PERPLEXITY_URL}
            className="text-purple-400 hover:text-white transition-colors duration-300"
          >
            <SiPerplexity className="w-5 h-5" />
            <span className="sr-only">Perplexity Referral</span>
          </a> */}
        </div>
      </div>
    </footer>
  );
}
