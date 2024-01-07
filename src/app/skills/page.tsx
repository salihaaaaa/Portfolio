import React from "react";
import portfolioData from "../lib/portfolio-data";
import SkillCard from "../components/SkillCard";

const Skill = () => {
  const skills  = portfolioData.skills;
  return (
<SkillCard skills={skills} />
  );
};

export default Skill;
