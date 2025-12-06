import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Replace these with your real project images
import Project1 from "../../assets/project1.jpg";
import Project2 from "../../assets/project2.jpg";
import Project3 from "../../assets/project3.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Handloom Saree Web App",
      description:
        "A full-stack blog app with authentication, CRUD features, REST APIs, and MongoDB.",
      tech: ["Tailwindcss","JavaScript","React","Stripe","Node", "Express", "MongoDB"],
      image: Project1,
      github: "https://github.com/batwalsanket04/Handloom-Saree-E-commerce-WebApp",
      live: "https://handloom-saree-e-commerce-webapp-frontend-113c.onrender.com",
    },
    {
      id: 2,
      title: "Expense Tracker",
      description:
        "Expense Tracker Web-App built with MERN Stack Tools.authentication,CRUD operstions ,REST APIs and  All data handled in the mongoDB",
      tech: ["React", "Tailwind", "JavaScript","Node.Js","Express.Js","MongoDB"],
      image: Project2,
      github: "https://github.com/",
      live: "https://yourportfolio.vercel.app",
    },
    {
      id: 3,
      title: "RealNest",
      description:
        "The project showcases a fully functional frontend interface that allows users to explore property listings, view details, and navigate through a visually appealing layout designed for real-world real estate platforms.",
      tech: ["TailwindCss","React.js","Web3Forms"],
      image: Project3,
      github: "https://github.com/batwalsanket04/RealEstate-WebApp",
      live: "https://real-estate-web-app-beta.vercel.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0B0F19] text-white px-6 py-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <h2 className="text-4xl font-bold mb-4 text-center">
          My <span className="text-[#FACC15]">Projects</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          Here are some of my recent projects built using MERN Stack and modern
          web technologies.
        </p>

        {/* Projects Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#111726] border border-[#1F2937] rounded-3xl overflow-hidden shadow-lg group hover:shadow-2xl transition"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#FACC15] mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((item, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-[#0B0F19] border border-[#1F2937]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition"
                  >
                    <FaGithub /> Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#FACC15] hover:underline"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
