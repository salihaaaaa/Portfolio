import React from "react";
import { Skill } from "../lib/definitions";
import Button from "./Button";

interface AboutSkillProps {
  skills: Skill[];
}

const SkillCard: React.FC<AboutSkillProps> = ({ skills }) => {
  return (
    <div className="p-8 mb-2 max-w-sm md:max-w-lg mx-auto rounded-xl shadow-lg">
      <h2 className="text-lg text-black font-semibold text-center">
        Skills
      </h2>
      <div className="flex flex-wrap justify-start">
        {skills.map((skill) => (
          <Button key={skill.id}>{skill.name}</Button>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;
