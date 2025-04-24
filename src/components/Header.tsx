import React from "react";

const Header: React.FC = () => (
  <header className="sticky top-0 bg-black/80 backdrop-blur-sm z-10">
    <nav className="max-w-screen-md mx-auto px-4 md:px-8 lg:px-16 py-3 flex justify-center md:justify-end items-center space-x-4 md:space-x-6">
      <a
        href="#introduction"
        className="text-xs font-medium text-gray-400 hover:text-white transition duration-300"
      >
        Intro
      </a>
      <a
        href="#skills"
        className="text-xs font-medium text-gray-400 hover:text-white transition duration-300"
      >
        Skills
      </a>
      <a
        href="#experience"
        className="text-xs font-medium text-gray-400 hover:text-white transition duration-300"
      >
        Experience
      </a>
      <a
        href="#activities"
        className="text-xs font-medium text-gray-400 hover:text-white transition duration-300"
      >
        Activities
      </a>
      <a
        href="#projects"
        className="text-xs font-medium text-gray-400 hover:text-white transition duration-300"
      >
        Projects
      </a>
    </nav>
  </header>
);

export default Header;
