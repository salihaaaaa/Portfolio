import React from "react";
import { Skill } from "../lib/definitions";
import Button from "./Button";

interface SkillCardProps {
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ skills }) => {
  return (
    <div className="flex flex-wrap flex-row justify-start mt-4">
      {skills.map((skill) => (
        <Button key={skill.id}>{skill.name}</Button>
      ))}
    </div>
  );
};

export default SkillCard;
