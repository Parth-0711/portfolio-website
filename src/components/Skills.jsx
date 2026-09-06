import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "JavaScript", "SQL"],
  },
  {
    title: "Backend",
    skills: ["Spring Boot", "REST APIs", "JWT", "Hibernate"],
  },
  {
    title: "Frontend",
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB", "Firebase"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-28">
      <SectionWrapper>
        <div className="max-w-7xl mx-auto px-8">

          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16">
            Skills
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                className="bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{
                  y: -8,
                }}
              >
                <h3 className="text-2xl font-bold text-green-700 mb-6">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        bg-green-100
                        text-green-700
                        px-4
                        py-2
                        rounded-full
                        text-sm
                        font-medium
                        hover:bg-green-500
                        hover:text-white
                        transition
                        cursor-default
                      "
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </SectionWrapper>
    </section>
  );
};

export default Skills;