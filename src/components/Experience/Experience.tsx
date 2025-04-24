import React from "react";
import Section from "../Section";
import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../data/portfolioData";

const Experience: React.FC = () => (
  <Section title="Experience" id="experience">
    {experiences.map((exp, index) => (
      <ExperienceCard key={index} experience={exp} />
    ))}
  </Section>
);

export default Experience;
