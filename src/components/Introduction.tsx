import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Introduction: React.FC = () => (
  <section
    id="introduction"
    className="pt-20 md:pt-24 lg:pt-28 pb-10 md:pb-12 px-4 md:px-8 lg:px-16 max-w-screen-md mx-auto text-left"
  >
    <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
      Wilson Liu
    </h1>
    <p className="text-md sm:text-lg text-gray-300 mb-3">
      Web & Mobile Developer
    </p>
    <p className="text-sm sm:text-base text-gray-400 mb-5 max-w-xl">
      Building web and mobile applications with React and React Native.
    </p>
    <div className="flex justify-start space-x-3">
      <a href="mailto:wilsonliumail@gmail.com" aria-label="Email">
        <button className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-black">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#374151_0%,#1e2631_50%,#374151_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-1 py-1 backdrop-blur-3xl">
            <Mail size={18} className="text-gray-300" />
          </span>
        </button>
      </a>
      <a
        href="https://github.com/wilsonliu2"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <button className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-black">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#374151_0%,#1e2631_50%,#374151_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-1 py-1 backdrop-blur-3xl">
            <Github size={18} className="text-gray-300" />
          </span>
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/wilsonliu1/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <button className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-black">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#374151_0%,#1e2631_50%,#374151_100%)]" />
          <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-gray-900 px-1 py-1 backdrop-blur-3xl">
            <Linkedin size={18} className="text-gray-300" />
          </span>
        </button>
      </a>
    </div>
  </section>
);

export default Introduction;
