import React from "react";
import { ExternalLink } from "lucide-react";
import { ProjectItem } from "../../data/portfolioData";

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <div className="p-3 rounded-lg animate-shimmer border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors flex flex-col">
    <h3 className="text-md font-semibold text-slate-200 mb-1.5">
      {project.name}
    </h3>
    {project.award && (
      <p className="text-[11px] font-medium text-purple-400 mb-1.5">
        {project.award}
      </p>
    )}
    <p className="text-xs text-slate-400 mb-2 flex-grow">
      {project.description}
    </p>
    {project.link && (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs text-blue-400 hover:text-blue-300 inline-flex items-center mt-auto transition duration-300"
      >
        View Project <ExternalLink size={12} className="ml-1" />
      </a>
    )}
  </div>
);

export default ProjectCard;
