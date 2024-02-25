export interface About {
    name: string;
    role: string;
    email: String;
    linkedin: String;
    github: String;
  }
  
  export interface Skill {
    id: number;
    name: string;
  }
  
  export interface Project {
    id: number;
    title: string;
    description: string;
    githubLink: string;
  }
  
  export interface PortfolioData {
    about: About;
    skills: Skill[];
    projects: Project[];
  }
  