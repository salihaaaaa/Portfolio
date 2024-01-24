import { PortfolioData } from './definitions';

const portfolioData: PortfolioData = {
  about: {
    name: 'Salihah',
    role: 'A passionate developer with expertise in web technologies.',
    bio: "Hi! I'm Salihah, a passionate web developer based in Malaysia. I specialize in frontend technologies and have experience working with various programming languages and tools. I have a keen interest in building side projects for fun, exploring new technologies, and pushing the boundaries of what's possible on the web. As a continuous learner, I enjoy staying up-to-date with the latest trends in web development.",
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
      description: 'A Leave Management System developed as part of my self-learning journey with ASP.NET Core Web API. This project allowed me to delve into the world of backend development, where I acquired skills in designing robust APIs and implementing features like user authentication and role-based access control. I thoroughly tested the API endpoints using Postman, ensuring its reliability and functionality.',
      demoLink: '',
      githubLink: 'https://github.com/salihaaaaa/LeaveSystem.git',
    },
  ],
};

export default portfolioData;
