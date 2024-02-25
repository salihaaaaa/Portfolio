import { PortfolioData } from './definitions';

const portfolioData: PortfolioData = {
  about: {
    name: 'Salihah',
    role: 'Java Developer',
    imageUrl: '/salihah.jpg',
  },
  skills: [
    {
      id: 1,
      name: 'Java'
    },
    {
      id: 2,
      name: 'Spring Boot'
    },
    {
      id: 3,
      name: 'PostgreSQL'
    },
    {
      id: 4,
      name: 'Postman'
    },
    {
      id: 5,
      name: 'Git'
    },
    {
      id: 6,
      name: 'Vercel'
    },
    {
      id: 7,
      name: 'Intellij IDEA'
    },
    {
      id: 8,
      name: 'Visual Studio Code'
    },
    {
      id: 9,
      name: 'React'
    },
    {
      id: 10,
      name: 'Next.js'
    },
    {
      id: 11,
      name: 'TypeScript'
    },
  ],
  projects: [
    {
      id: 1,
      title: 'Online Banking System',
      description: "As a personal project, I developed Online Banking System using Spring Boot and PostgreSQL. The project focuses for managing bank accounts online. I implemented features such as user authentication, account creation, fund transfer, and account close. Thoroughly tested using Postman.",
      githubLink: 'https://github.com/salihaaaaa/online-banking-system.git'
    },
    {
      id: 2,
      title: 'Portfolio',
      description: 'A portfolio website that reflects my journey in self-learning. Utilizing the power of Next.js and the simplicity of Tailwind CSS, this website serves as a testament to my dedication to mastering new technologies. Through this project, I honed my skills in building dynamic and responsive web applications while creating an interactive space for presenting my achievements and capabilities.',
      githubLink: 'https://github.com/salihaaaaa/portfolio.git'
    }
    
  ],
};

export default portfolioData;
