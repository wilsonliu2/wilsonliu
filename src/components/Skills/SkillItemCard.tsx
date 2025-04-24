import React from "react";
import { SkillItem } from "../../data/portfolioData";

interface SkillItemCardProps {
  skill: SkillItem;
}

const SkillItemCard: React.FC<SkillItemCardProps> = ({ skill }) => {
  const IconComponent = skill.icon;
  return (
    <div className="relative p-[1px] overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-black">
      <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#374151_0%,#1e2631_50%,#374151_100%)]" />
      <span className="inline-flex h-full w-full cursor-default items-center justify-start rounded-lg bg-gray-900 px-2.5 py-1.5 backdrop-blur-3xl">
        <span className="w-5 h-5 mr-2 flex-shrink-0 flex items-center justify-center">
          <IconComponent size="1.25em" />
        </span>
        <span className="text-gray-300 text-xs font-medium">{skill.name}</span>
      </span>
    </div>
  );
};

export default SkillItemCard;
