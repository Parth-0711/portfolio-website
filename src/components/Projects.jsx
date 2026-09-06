import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "BrezzyDrive Rentals",
    description:
      "Full-stack car rental platform built using the MERN stack, enabling users to browse vehicles, view car information,and access a seamless rental experience through a modern responsive interface.",
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "REST API"],
    github:
      "https://github.com/Parth-0711/BrezzyDrive-Rentals-A-Car-Renting-Platform",
    demo: "https://brezzy-drive-car-rental-jftz.vercel.app/",
  },
  {
    title: "FinSight",
    description:
      "AI-powered personal finance management system with expense tracking, budgeting, PDF reports, and AI-generated insights.",
    tech: ["Java", "Spring Boot", "React", "MySQL", "JWT"],
    github: "https://github.com/Parth-0711/FinSight-AI-Personal-Finance-System",
    demo: "#",
  },
  {
  title: "Electricity Bill Prediction",
  description:
    "Machine learning-based electricity bill prediction system that analyzes household power consumption data to forecast monthly electricity costs and identify usage patterns.",
  tech: ["Python", "Pandas", "NumPy", "Scikit-Learn", "Jupyter Notebook"],
  github: "https://github.com/your-username/electricity-bill-prediction",
  demo: "https://electricity-bill-predictor.vercel.app/",
  },
  {
    title: "QuickAI",
    description:
      "AI SaaS platform integrating Gemini API with authentication, cloud storage, and intelligent content generation.",
    tech: ["React", "Node.js", "Express", "Gemini API"],
    github: "https://github.com/Parth-0711/QuickAI",
    demo: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-28">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-md
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                {/* Project Header */}
                <div className="h-44 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-bold">
                    {project.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="
                          bg-green-100
                          text-green-700
                          px-3
                          py-1
                          rounded-full
                          text-sm
                          font-medium
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        bg-gray-900
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        hover:bg-black
                        transition
                      "
                    >
                      <FaGithub />
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        flex
                        items-center
                        gap-2
                        bg-green-500
                        text-white
                        px-4
                        py-2
                        rounded-lg
                        hover:bg-green-600
                        transition
                      "
                    >
                      <FaExternalLinkAlt />
                      Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default Projects;
