import React from "react";
import { Project } from "../lib/definitions";
import CustomLink from "./CustomLink";

interface ProjectCardProps {
  projects: Project[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projects }) => {
  return (
    <div className="flex flex-wrap flex-col md:flex-row justify-start mt-4">
      {projects.map((project) => (
        <div
          key={project.id}
          className="rounded-xl p-3 mb-2 border border-slate-200 shadow-lg basis-1/3 mr-4"
        >
          <h1 className="font-medium text-slate-700 mb-2 italic">{project.title}</h1>
          <p className="text-justify mb-4">{project.description}</p>
          <CustomLink href={project.githubLink}>GitHub</CustomLink>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
