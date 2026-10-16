import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from "react-icons/fa";

import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Floating Shapes */}
      <div className="absolute top-28 left-20 w-4 h-4 bg-green-400 rotate-45"></div>

      <div className="absolute top-40 right-44 w-5 h-5 bg-orange-400 rotate-12 rounded-md"></div>

      <div className="absolute bottom-40 left-1/3 w-3 h-3 bg-cyan-400 rounded-full"></div>

      <div className="absolute bottom-28 right-24 w-4 h-4 bg-orange-400 rotate-45"></div>

      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gray-900">
              Hi, I'm
              <span className="block text-green-600">
                Parth Jadhav
              </span>
            </h1>

            <h2 className="mt-5 text-xl md:text-2xl font-semibold text-gray-700">
              Java Developer • Spring Boot Developer • Full Stack Developer •
              Software Engineer
            </h2>

            <p className="mt-8 text-lg text-gray-600 max-w-xl leading-relaxed">
              Passionate Software Engineer focused on building scalable
              applications using Java, Spring Boot, React.js, MySQL, REST APIs,
              and modern web technologies.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-10">
              <a
                href="#projects"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 shadow-lg hover:scale-105"
              >
                View Projects
                <FaArrowRight />
              </a>

              <a
                href="/resume.pdf"
                download
                className="bg-white border border-green-500 text-green-600 px-8 py-4 rounded-xl font-semibold flex items-center gap-3 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-md"
              >
                <FaDownload />
                Resume
              </a>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-6 mt-10">
              <a
                href="https://github.com/Parth-0711"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-xl text-gray-700 hover:bg-green-500 hover:text-white transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/parth-jadhav-6b1266260/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-xl text-gray-700 hover:bg-green-500 hover:text-white transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={profile}
              alt="Parth Jadhav"
              className="w-[350px] md:w-[500px] object-cover"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;