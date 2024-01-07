import React from "react";
import portfolioData from "../lib/portfolio-data";
import AboutCard from "../components/AboutCard";
import { About } from "../lib/definitions";

const About = () => {
  const about: About = portfolioData.about;

  return (
    <AboutCard about={about}  />
  );
};

export default About;
