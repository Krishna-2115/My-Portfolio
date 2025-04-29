import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";

const linkClasses =
  "block py-2 pr-4 pl-3 text-gray-200 border-b border-gray-700 hover:bg-purple-900 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-400 lg:p-0 dark:text-gray-300 lg:dark:hover:text-purple-400 dark:hover:bg-purple-800 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700";

const NavLink = ({ to, onClick, children }) => (
  <li>
    <Link
      to={to}
      onClick={onClick}
      className={`${linkClasses}`}
      aria-current="page"
    >
      {children}
    </Link>
  </li>
);

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <header>
      <nav className="bg-gradient-to-r from-black via-purple-800 to-purple-900 text-white border-b border-purple-700 px-4 lg:px-6 py-2.5 fixed top-0 w-full z-50 shadow-md">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="/dev-icon.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Sara Dev Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              Krishna Tyagi
            </span>
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              onClick={toggleOpen}
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-300 rounded-lg lg:hidden hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-600"
              aria-controls="mobile-menu-2"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <NavLink to="/" onClick={toggleOpen}>
                Home
              </NavLink>
              <NavLink to="/about" onClick={toggleOpen}>
                About
              </NavLink>
              <NavLink to="/projects" onClick={toggleOpen}>
                Projects
              </NavLink>
              <NavLink to="/skills" onClick={toggleOpen}>
                Skills
              </NavLink>
              <NavLink to="/experience" onClick={toggleOpen}>
                Experience
              </NavLink>
              <NavLink to="/education" onClick={toggleOpen}>
                Education
              </NavLink>
              <NavLink to="/contact" onClick={toggleOpen}>
                Contact Me
              </NavLink>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
