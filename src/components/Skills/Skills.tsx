import React from "react";
import Section from "../Section";
import SkillItemCard from "./SkillItemCard";
import { skillsData } from "../../data/portfolioData";

const Skills: React.FC = () => (
  <Section title="Main Technologies" id="skills">
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 gap-y-3">
      {skillsData.map((skill, index) => (
        <SkillItemCard key={index} skill={skill} />
      ))}
    </div>
  </Section>
);

export default Skills;
