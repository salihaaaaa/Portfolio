import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="p-5 md:p-10">
      <h2 className="text-3xl font-bold p-2 italic">Projects</h2>
      <div className="p-1 md:p-5 flex flex-wrap flex-row md:flex-col">
        <div className="m-2 p-2 shadow-md rounded">
          <h3 className="text-2xl italic font-semibold mb-4">Portfolio</h3>
          <p className="mb-4 text-justify">
            A portfolio website that reflects my journey in self-learning.
            Utilizing the power of Next.js and the simplicity of Tailwind CSS,
            this website serves as a testament to my dedication to mastering new
            technologies. Through this project, I honed my skills in building
            dynamic and responsive web applications while creating an
            interactive space for presenting my achievements and capabilities.
          </p>
          <p>Technologies: Typescript, Next.js, TailwindCSS, Vercel</p>
          <Link
            href="https://github.com/salihaaaaa/portfolio.git"
            className="mt-4 block"
          >
            Github
          </Link>
          <Link href="https://salihah.vercel.app/">Demo</Link>
        </div>
        <div className="m-2 p-2 shadow-md rounded">
          <h3 className="text-2xl italic font-semibold mb-4">
            Leave Management System
          </h3>
          <p className="text-justify">
            A Leave Management System developed as part of my self-learning
            journey with ASP.NET Core Web API. This project allowed me to delve
            into the world of backend development, where I acquired skills in
            designing robust APIs and implementing features like user
            authentication and role-based access control. I thoroughly tested
            the API endpoints using Postman, ensuring its reliability and
            functionality. The Leave Management System showcases my ability to
            tackle real-world problems through self-directed learning and
            practical application of knowledge.{" "}
            <span className="block mt-4">The API allows users to:</span>
            <span className="block">
              - Submit leave requests with specified dates and reasons.
            </span>
            <span className="block">
              - View their leave history and current leave status.
            </span>
            <span className="block">
              - Managers can approve or reject leave requests for their team
              members.
            </span>
            <span className="block mb-4">
              - Admins have access to comprehensive leave reports and can manage
              user roles.
            </span>
          </p>
          <p className="mb-4">Technologies: C#, ASP.NET Core, Web API</p>
          <Link href="https://github.com/salihaaaaa/LeaveSystem.git">
            Github
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
