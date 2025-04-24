import React from "react";
import Section from "../Section";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/portfolioData";

const Projects: React.FC = () => (
  <Section title="Projects" id="projects">
    <div className="grid grid-cols-1 gap-4">
      {projects.map((proj, index) => (
        <ProjectCard key={index} project={proj} />
      ))}
    </div>
  </Section>
);

export default Projects;
