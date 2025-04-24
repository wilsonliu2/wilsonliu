import React from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ title, children, id }) => (
  <section
    id={id}
    className="py-2 md:py-4 lg:py-6 px-4 md:px-8 lg:px-16 max-w-screen-md mx-auto"
  >
    <h2 className="text-xl md:text-2xl font-bold mb-5 md:mb-6 text-gray-100">
      {title}
    </h2>
    <div className="space-y-5">{children}</div>
  </section>
);

export default Section;
