import React from "react";
import portfolioData from "../lib/portfolio-data";
import Button from "../components/Button";

const Skill = () => {
  const skills  = portfolioData.skills;
  return (
    <div className="p-2 md:p-10 mb-2">
      <h2 className="text-3xl font-bold p-2 italic">Skills</h2>
      <div className="md:p-10 flex flex-wrap flex-row justify-between items-start space-x-5">
        {skills.map((skill) => (
          <Button key={skill.id}>{skill.name}</Button>
        ))}
      </div>
    </div>
  );
};

export default Skill;
