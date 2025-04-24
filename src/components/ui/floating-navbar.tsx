"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const previous = scrollYProgress.getPrevious();
      if (typeof previous === "number") {
        let direction = current - previous;
        if (window.scrollY < 100) {
          setVisible(true);
        } else {
          setVisible(direction < 0);
        }
      } else if (window.scrollY < 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-4 md:top-6 lg:top-8 inset-x-0 mx-auto rounded-full z-[5000] px-4 md:px-6 py-2 items-center justify-center space-x-3 md:space-x-4",
          "bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)]",
          "bg-[length:200%_100%]",
          "bg-[-200%_0]",
          "border border-slate-800 shadow-lg",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => (
          <a
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative items-center flex space-x-1 transition-colors duration-300 text-xs sm:text-sm px-2 sm:px-3 py-1",
              "font-medium text-slate-400 hover:text-slate-100"
            )}
          >
            {navItem.icon && (
              <span className="block sm:hidden">{navItem.icon}</span>
            )}
            <span className="block text-xs">{navItem.name}</span>
          </a>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
