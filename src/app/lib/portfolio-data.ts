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
      title: 'Portfolio',
      description: 'A portfolio website that reflects my journey in self-learning. Utilizing the power of Next.js and the simplicity of Tailwind CSS, this website serves as a testament to my dedication to mastering new technologies. Through this project, I honed my skills in building dynamic and responsive web applications while creating an interactive space for presenting my achievements and capabilities.',
      demoLink: 'https://salihah.vercel.app/',
      githubLink: 'https://github.com/salihaaaaa/portfolio.git',
    },
    {
      id: 2,
      title: 'Leave Management System',
      description: "Explore my Employee Management API project! Developed using Spring Boot and PostgreSQL, this project is dedicated to API functionality, emphasizing CRUD operations for employee data management. The API ensures efficient communication with a PostgreSQL database, allowing for the creation, retrieval, updating, and deletion of employee records. Thoroughly tested using Postman.",
      demoLink: '',
      githubLink: 'https://github.com/salihaaaaa/Employee-Management-System.git',
    },
  ],
};

export default portfolioData;
