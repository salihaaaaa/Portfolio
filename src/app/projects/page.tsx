import React from "react";
import portfolioData from "../lib/portfolio-data";
import CustomLink from "../components/CustomLink";

const Project = () => {
  const projects  = portfolioData.projects;

  return (
    <div className="p-2 md:p-10">
      <h2 className="text-3xl font-bold italic">Projects</h2>
      <div className="md:p-5 flex flex-wrap flex-row md:flex-col">
        {projects.map((project) => (
          <div className="m-1 p-3 shadow-md rounded" key={project.id}>
            <h3 className="text-2xl italic font-semibold mb-4">
              {project.title}
            </h3>
            <p className="mb-4 text-justify">{project.description}</p>
            <p className="mb-4">{project.technologies}
              
            </p>
            <CustomLink href="https://github.com/salihaaaaa/portfolio.git">
              Github
            </CustomLink>
            <CustomLink href="https://salihah.vercel.app/">Demo</CustomLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
