import React from "react";
import { ExperienceItem } from "../../data/portfolioData";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => (
  <div className="p-3 rounded-lg animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors">
    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-1">
      <h3 className="text-md font-semibold text-slate-200">
        {experience.title}
      </h3>
      <p className="text-xs text-slate-400 mt-1 sm:mt-0">
        {experience.duration}
      </p>
    </div>
    <p className="text-sm font-medium text-slate-300 mb-1.5">
      {experience.company}
    </p>
    <p className="text-xs text-slate-400">{experience.description}</p>
  </div>
);

export default ExperienceCard;
