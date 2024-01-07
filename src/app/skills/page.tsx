import React from "react";
import portfolioData from "../lib/portfolio-data";
import SkillCard from "../components/SkillCard";

const Skill = () => {
  const skills = portfolioData.skills;
  return (
    <div className="p-8 mb-2">
      <h2 className="text-xl md:text-2xl text-black font-semibold text-start mb-6 italic">
        Skills
      </h2>
      <p className="mb-1 text-justify">
        Explore the skills I have acquired throughout my journey. From programming
        languages to frameworks and tools, here is a glimpse of what I bring to
        the table.
      </p>
      <SkillCard skills={skills} />
    </div>
  );
};

export default Skill;
