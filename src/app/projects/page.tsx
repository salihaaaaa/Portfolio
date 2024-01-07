import React from "react";
import portfolioData from "../lib/portfolio-data";
import ProjectCard from "../components/ProjectCard";

const Project = () => {
  const projects = portfolioData.projects;
  return (
    <div className="p-8 mb-2">
      <h2 className="text-xl md:text-2xl text-black font-semibold text-start mb-6 italic">Projects</h2>
      <p className="mb-1 text-justify">
        Check out some of the projects I have worked on below. Each project showcases my skills and expertise in various technologies.
      </p>
      <ProjectCard projects={projects} />
    </div>
  );
  
  
  
};

export default Project;
